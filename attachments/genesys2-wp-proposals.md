# Genesys 2 Work Packages proposals

## 1) Partnership development

> Reaching out to other genebanks around the world to share data on the portal.  It was recognized that GeneSys
> is to be primarily a data portal on germplasm – access to accessions
> is another matter, independent of participation in GeneSys.  Questions
> to be addressed include: how can forest trees be part of this domain,
> research collections, mutant stock, material in private collections,
> or only MLS material, additional “crops” beyond Annex 1? Targeted
> genebanks to become data providers will be identified and prioritized.
> A strategy for acquiring data sets from the priority targets will be
> developed. It is also recognized that there may be communities of
> genebanks (e.g. Article 15) and that networks, such as the European
> network that created EURISCO, should be catered to. The development of
> such networks will be stimulated. All instruments that can help
> institutes or networks become data providers will be developed,
> including awareness raising material, training activities and
> material, but also data sharing agreements and clarity attribution and
> intellectual property issues. This WP is pivotal to GII and will
> provide an important linkage to the project governance.  [Indicative
> budget:  USD80,000 p.a.]

1. [GRIN-Global](http://www.grin-global.org/index.php/Main_Page) will be installed on genebanks networks and serve as primary instrument for allowing germplasm data to be transferred to Genesys. Using a solution such as GRIN-Global will allow genebanks' data-curators to store germplasm information using highly specific computer standards. By doing so, data can more easily be analyzed and searched upon.

2. For genebanks unable to install GRIN-Global, a system such as [Web Harvesting](http://en.wikipedia.org/wiki/Web_harvesting) will be used. Genebanks will need to put their data online as HTML formatted websites. Genesys will then automatically gather data from these websites. This allows genebanks to make their data available to Genesys with very little effort. In most cases, genebanks already have websites that we can start using for this data-exchange process.

3. To agree on data sharing formats, [Crop Ontology](http://www.cropontology.org/) will be used. It will serve as a central repository for documenting the standards used by the various genebanks. For example, one genebank might be measuring the *plant height* of *Rice* using *centimetres*. Another genebank might be using *inches* for the same trait. All these standards will be documented in the Crop Ontology. By doing so we'll be able to identify traits and convert them into specific formats whenever it is needed.

## 2) Data loading mechanisms

> Developing tools and procedures for pain-free
> data sharing, and providing training in their use as necessary.  The
> data will at some stage have to be made visible via the GII web
> interface. This can be achieved via several options that will all be
> made available. The current Direct Data Control (DDC) utility is one
> option that might need enhancement, but also other uploading
> mechanisms will be explored. Web Services functionality is another
> necessary option that needs to be made available. This will not be
> developed from scratch but through use, or further development, of the
> GBIF Integrated Provider Toolkit (IPT). Data quality assessment tools
> will be required to be integrated with uploading options. This is
> anticipated to be a short term WP and the mechanisms should only
> require intermittent maintenance.  It is possible that additional
> options may be required in the future. All options will be completely
> documented and data sources will be advised about the most appropriate
> option for their situation and supported in the adoption of that
> method.  [Indicative budget:  USD60,000 for initial development,
> followed by USD10,000 p.a. thereafter.]

1. The current DDC application will continue to be used and improved. The idea is to build a *standard HTTP API* for data exchange that the DDC will use. This will provide a solid foundation for developers and users that may want to upload data in formats that are not supported by the DDC.

2. Another interface for data loading will be build, called the *Staging Area*. It will provide the same functionalities as the DDC, but through a web-interface. This will make the upload system available to a broader audience without obligating users to install an application.

3. *Web Scraping* will also be used. It will allow us to automatically download data from a genebank's website. The automated exchange process will facilitate the acquisition of data, allowing Genesys to reach sources of information that it couldn't before.

4. Once GRIN-Global will be installed on the genebank's networks, Genesys will be able to communicate directly with the genebank's database using standard web-services. This will completely automate the data-exchange process.

5. All the exchanges of data will happen through standard network protocols (such as HTTP) and the data formats will be documented using the [Crop Ontology](http://www.cropontology.org/) tool. Using standard protocols will allow Genesys to use available software libraries without rewriting everything from scratch.

## 3) Data curation

> Developing and implementing tools and procedures for
> data quality checking and improvement.  Data standards are an
> essential component of any PGR information system. Accession-level
> standards have been developed by IPGRI/Bioversity and are in common
> use by genebanks, especially for passport data as the Multi-Crop
> Passport Descriptors (MCPD), and GCP supported ontologies. Some
> communities will have additional passport descriptors which will be
> integrated on an ‘as appropriate’ basis. There has been a draft
> standard for C & E data developed in the first phase of GeneSys, which
> will require further discussion before validation. [Indicative budget:
> USD200,000 p.a.]

1. Data quality tools will be built using the [Crop Ontology API](http://www.cropontology.org/api). The tools will communicate dynamically with this repository, allowing them to always stay up-to-date with the latest standards.

2. The [Crop Ontology](http://www.cropontology.org/) will serve as a central place for curators to share and discuss data standards. Genesys will be able to use these standards programmatically through the Crop Ontology API and benefit from these connections in its internal routines.

## 4) Facilitating germplasm use

> Adding analytical functionality and streamlined access to data to the
> GeneSys portal.  This involves the development of a spectrum of tools
> for looking at and/or extracting data from GENESYS. The most visible
> will be the web interface based on the current GENESYS web page. But
> there will be several alternatives. For example, an API will be
> developed with web services to allow third parties to automatically
> harvest data from GENESYS. But it will also be possible to extract
> specific accession-level data in Excel, or comma separated files.
> These interfaces will allow any user to search the data, and use it in
> projects like ICARDA’s FIGS initiative, CIAT’s Atlas initiative and
> CIMMYT’s SeeD initiative. For any utilization the attribution and
> intellectual property issues will need to communicated very clearly
> with the users. [Indicative budget:  USD60,000 for initial
> development, followed by USD10,000 p.a. thereafter.]

1. The entire Genesys database will be made available through a [standard HTTP API](http://wiki.apache.org/couchdb/HTTP_Document_API). This will facilitate access of the data and allow users and developers to more easily build third-party applications around it. The API makes the data more dynamic and scalable:

	- Pieces of information can easily be moved around different systems and networks.
	- Low-connectivity sites can choose to stop data transfers and resume them at other moments of the day when their connection is active.
	- Finally, the architecture can truly become decentralized, with many different nodes in many different geographical locations serving as a big central repository for Germplasm data.

2. Internal analytic interfaces will be built by the Genesys team that will communicate directly with this API. Sharing a common API for database communication is very important as it allows us to build highly complex interfaces with very little cost.

## 5) Crop Registry integration

> The objective of this small WP is to include the current functionality
> of some of the Crop Registries developed in GPG2 in GII to identify
> and cross reference accessions that are (probably) identical but held
> in different genebanks. Also the Crop Registries will be used as
> additional data sources, in the case where holding genebanks have not
> previously become GII data providers. It will allow for future
> expansion, or potentially extraction, of Crop Registries.  [Indicative
> budget:  USD200,000 for initial development, followed by USD20,000
> p.a. thereafter.]

1. no comments

## 6.1) Addressing issues and planning

> In order to continue to address the requirements of all stakeholder
> and user audiences a number of technical issues need to be discussed,
> resolved and implemented. These would include the need for a
> ‘universal identifier’ (or UID) that would enable the linkage required
> to identify accessions and other genotype entities across different
> information systems. A research activity to establish options for
> linkage to breeders’ data, such as that managed in some ICIS
> installations would also be undertaken. Another discussion is required
> to build upon the draft C & E data standards developed by G 1.0; this
> will enable a global standard for this type of data to be validated
> and published for international use.

1. Accessions in Genesys' database will use Universal Identifiers. In particular they will adopt the [DOI](http://www.doi.org/) format which is the most popular standard for digital information. It's easy to lose information in the vastness of the internet. Using a system such as DOI will allow us to identify accessions, and other digital information, even when the data is transferred from one database to another.

2. Genesys' HTML web-interface will be structured following [Semantic Web](http://en.wikipedia.org/wiki/Semantic_Web) guidelines. This will allow Genesys to become searchable through search engines such as Google. By doing this we will increase accessibility of germplasm data to a much broader audience.

## 6.2) User friendly interface

> The GII interface will need to address a broad audience and give each
> group an intuitive entry point. This will involve continual input from
> different user groups and subsequent planning, design and
> implementation of changes. A proactive user feedback mechanism will be
> developed to ensure portal applicability and its ongoing utility to
> all user groups. This will also involve extending the interface and
> data content languages beyond English.

1. Genesys will use [HTML5](http://en.wikipedia.org/wiki/HTML5) for its web-interface. HTML5 is an incredibly powerful technology capable of representing highly complex interfaces. We will benefit from the software libraries available in open-source communities. This will let us create intuitive interfaces with very little cost and time.

2. In combination with standards such as CSS, JavaScript and Canvas we can easily generate graphs, diagrams and charts directly on Genesys' website - without the need of installing third-party applications. In combination with frameworks such as [Backbone.js](http://documentcloud.github.com/backbone/#examples), Genesys will have a highly intuitive and easy to use interface.

## 6.3) Data attribution

> Ensuring data sharers are correctly attributed for their contribution
> is an important feature to obtain the support of global data sharers.
> Reviewing the Data Sharing Agreement (DSA) and Terms and Conditions of
> Use (TCU) will be undertaken in concert with the governance and
> technical management components of the proposed GeneSys II project.

1. no comments

## 6.4) Scalability through flexible design and structure

> All information systems require flexibility in design and structure to
> facilitate future changes in scope and other developments.  The
> ability to quickly add additional descriptors (e.g. citations), some
> of which may be community specific, functionality and features is seen
> as critical and the database schema will therefore undergo periodic
> review and modification to ensure system design is always optimal
> thereby providing rapid interface response times. This will at some
> stage require changes in hardware and software to increase access
> bandwidth and system capacity as the use of GII increases; thus
> optimal resource management is also a component of this work package.

1. Genesys' database architecture will be built around scalable solutions. Technology such as [Cloud Computing](http://en.wikipedia.org/wiki/Cloud_computing) and [NoSQL](http://en.wikipedia.org/wiki/NoSQL) databases will the foundation of the database design. This allows data to be highly available across different geographical locations. The schema-less capabilities of NoSQL databases will allow Genesys to more easily store data that is structured in many different formats.

*Here's what the structure would look like:*

![image](/architecture_seedhub.png)

## 6.5) WP communication

> Because GeneSys II will involve a coalition of participants that are
> globally distributed an effective communication strategy is essential.
> This will involve interaction between WP participants and, on a case
> by case basis, external collaborators to ensure targeted, effective
> and efficient delivery.

1. A system such as [GitHub](http://github.com/) will allow the participants to collaborate and communicate on the features being developed. It's the most used code-repository in the world. Linux, the most popular open-source software project, also uses GitHub to have people in the team collaborate effectively.

## 6.6) High Performance Equipment

> Based on the volume of data, and anticipated functionality, high
> performance server(s) will be required.

1. [Cloud Computing](http://en.wikipedia.org/wiki/Cloud_computing) will be used to host Genesys and allow it to face high processing and bandwidth demands.