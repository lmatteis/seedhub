Proposal for Genesys 2 *DRAFT*
=====

Genesys 1 has shown what type of functionalities are possible to help people discover and order *Germplasm Accessions* through a simple web interface. This proposal will concentrate on the **key improvements** that will allow Genesys 2 to become a more mature product by taking advantage of new concepts and technologies such as the [Open Data](http://en.wikipedia.org/wiki/Open_data) movement and the [Semantic Web](http://en.wikipedia.org/wiki/Semantic_Web) formats.

We can breakdown Genesys' main objectives in 3 parts:

1. Data **retrieval** (retrieving accessions, characterization data, evaluation data, etc..).
2. Data **storage** (storing the above information in a central database).
3. Data **accessibility** (making all of this data available through advanced search interfaces and programmable APIs).

If we dig our way through these objectives we can see that there's lots of room for **improvement**. Genesys, for example, shouldn't serve only as an interface for browsing data, it should provide a true platform for enabling users and developers to interact with this data in a programmatic way. 

## Data Retrieval

Currently Genesys retrieves its data either through file transfers, where database managers manually upload these files into a database, or through a desktop application called the **DDC**. This tool provides a simple interface for users to upload passport and C&E data.

The proposal is to avoid using a monolithic system where we expect data coming from a **single** entry point. Instead we can open the doors to many different systems:

- **DDC** – or a system equally powerful for letting people upload data
- **Staging Area** - a web based equivalent to the DDC
- **Web Scraping** - an automated system for crawling data from different sites
- **GRIN-Global web-services** 
- *and others…*

Using many different resources for retrieving data, will allow Genesys to become less stringent and more comfortable in dealing with data that exists in many different places and in many different formats.


## Data Storage

The proposal is to have an architecture built around [CouchDB](http://couchdb.org). All the
accessions, and metadata related to accessions, are saved in a central
CouchDB instance. This allows for easy replication and well defined API. 

*Here's what the structure would look like:*

![image](/architecture_seedhub.png)

One of the advantages that CouchDB provides, compared to other databases, is that it comes with a [standard HTTP API](http://wiki.apache.org/couchdb/HTTP_Document_API).

This API makes the data much more dynamic and scalable: 

- pieces of information can easily be moved around different systems and networks
- low-connectivity sites can choose to stop data transfers and resume them at other moments of the day when their connection is active
- finally, the architecture can truly become decentralized, with many different nodes in many different geographical locations serving as a big central repository for Germplasm data.

## Data Accessibility 

We're used to the idea of being able to search for things on popular search engines such as Google or Yahoo. We can easily find *food recipes*, *airplane tickets*, *cheap hotels*, *used cars* and many other things by simply inserting text in a search box. Unfortunately we cannot do the same for Germplasm Accessions. The proposal is to change that:

If we structure Genesys 2 following [Semantic Web](http://en.wikipedia.org/wiki/Semantic_Web) guidelines, we allow search engines to gather our data and make it searchable by people all over the world. This, combined with a more advanced framework ([Elastic Search](http://www.elasticsearch.org/) for example), can truly give rise to a richer search experience and allow people to find accessions just as easily as they're able to find *food recipes*.

Making data accessible through these standard interfaces will increase its distribution, broadening collaboration and accelerating research.

Here's some more examples of applications that could run on top of this system:

- Statistical apps
- Map apps with [ArcGIS](http://www.arcgis.com/home/) or [Google Maps](http://code.google.com/apis/maps/index.html)
- Highly advanced search apps for C&E filtering



