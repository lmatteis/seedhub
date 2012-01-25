var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc = 
  { _id:'_design/seedhub'
  , rewrites : 
    [ {from:"/", to:'_list/accessions/accessionsByCenter', query:{ limit: 10 } }
    , {from:"/login", to:'login.html'}
    , {from:"/api", to:'../../'}
    , {from:"/api/*", to:'../../*'}
    , {from:"/*", to:'*'}
    ]
  }
  ;

ddoc.views = {
  accessionsByCenter: {
    map: function (doc) {
      if(doc.INSTCODE && doc.ACCENUMB)
        emit(doc.INSTCODE, doc.ACCENUMB);
    }
  }
};

ddoc.lists = {
  accessions: function(head, req) {
    provides("html", function(){
      var row,
          Mustache = require("views/lib/mustache"),
          data = {
            title: "All Accessions",
            rows: []
          };

      while(row = getRow()) {
        data.rows.push(row);
      }
      var html = Mustache.to_html(this.templates.accessions, data, this.templates.partials);
      return html;
    });
  }
}

ddoc.validate_doc_update = function (newDoc, oldDoc, userCtx) {   
  if (newDoc._deleted === true && userCtx.roles.indexOf('_admin') === -1) {
    throw "Only admin can delete documents on this database.";
  } 
}

ddoc.views.lib = couchapp.loadFiles('./common');
ddoc.templates = couchapp.loadFiles('./templates');
couchapp.loadAttachments(ddoc, path.join(__dirname, 'attachments'));

module.exports = ddoc;
