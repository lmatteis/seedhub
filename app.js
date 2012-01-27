var couchapp = require('couchapp')
  , path = require('path')
  ;


ddoc = 
  { _id:'_design/seedhub'
  , rewrites : 
    [ 
      {from:"/", to:'_list/index/accessionsById', query:{ limit: "51" } },
      {from:"/start/:start", to:'_list/index/accessionsById', query:{ limit: "51", startkey: ":start" } }
    , {from:"/sitemap.xml", to:'_list/sitemap/accessionsById', query:{ limit: "500" } }
    , {from:"/accessions/:id", to:'_show/accessions/:id'}
    , {from:"/login", to:'login.html'}
    , {from:"/api", to:'../../'}
    , {from:"/api/*", to:'../../*'}
    , {from:"/*", to:'*'}
    ]
  }
  ;

ddoc.views = {
  accessionsById: {
    map: function (doc) {
      if(doc.ACCENUMB) {
        emit(doc._id, doc);
      }
    }
  }
};

ddoc.lists = {
  index: function(head, req) {
    // this should be the same number as the query done on top
    var rows_per_page = 51; 

    provides("html", function(){
      var row,
          Mustache = require("views/lib/mustache"),
          data = {
            title: "SeedHub - All Accessions",
            rows: [],
            next_startkey: false
          };

      for(var i=0; i<rows_per_page; i++) {
        row = getRow();
        if(i === (rows_per_page-1)) {
          // use the last one for next_link
          if(row) data.next_startkey = row.key;
        } else {
          if(row) data.rows.push(row);
        }
      }
      var html = Mustache.to_html(this.templates.index, data, this.templates.partials);
      return html;
    });
  },
  sitemap: function(head, req) {
    provides("xml", function(){
      var xml = '<?xml version="1.0" encoding="UTF-8"?>\
          <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\
              xmlns:image="http://www.sitemaps.org/schemas/sitemap-image/1.1"\
              xmlns:video="http://www.sitemaps.org/schemas/sitemap-video/1.1">';

      var row;
      while(row = getRow()) {
        xml += '<url><loc>http://www.seedhub.tk/accessions/'+ row.id +'</loc></url>';
      }
      xml += '</urlset>';
      return xml;
    });
  }
}

ddoc.shows = {
  accessions: function(doc, req) {
    var Mustache = require("views/lib/mustache"),
        data = {
          title: doc.ACCENUMB + " - " + doc.INSTCODE,
          properties: []
        };

    for(var i in doc) {
      if(i === "_id" || i === "_rev" || i === "_revisions") continue;
      data.properties.push({
        key: i,
        value: doc[i]
      });
    }

    var html = Mustache.to_html(this.templates.accessions, data, this.templates.partials);
    return {
      body: html
    }
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
