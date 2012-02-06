Proposal for Genesys 2
=====

Genesys 1 has shown what type of functionalities are possible to help people discover and order *Accessions* through a simple web interface. This proposal will concentrate on the **key improvements** that will allow Genesys 2 to become a more mature product by taking advantage of new technologies.

We can breakdown Genesys' main objectives in 3 parts:

1. Data **retrieval** (retrieving accessions, characterization data, evaluation data, etc..).
2. Data **storage** (storing the above information in a central database).
3. Data **accessibility** (making all of this data available through advanced search interfaces and programmable APIs).

If we dig our way through these objectives we can see that there's lots of room for **improvement**.

## Data Retrieval

Currently Genesys retrieves its data either through file transfers, where a database manager will manually upload these files into Genesys' database, or through a desktop application called **DDC upload tool**. This tool provides a simple interface for the user to upload accessions passport and C&E data.

The proposal here is to avoid using a monolithic system where we expect data coming from a **single** entry point. Instead open the doors to as many systems as possible:

- **DDC** – or a system equally powerful for letting people upload data
- **Staging Area** - a web based equivalent to the DDC
- **Web Scraping** - an automated system for retrieving data from many different resources
- etc..

Using many different resources for retrieving data will allow Genesys to become less stringent and more comfortable with dealing with data that exists in many different places and in many different formats.


## Data Storage

The proposal is to have an architecture built around [CouchDB](http://couchdb.org). All the
accessions, and metadata related to accessions, are saved in a central
CouchDB instance. This allows for easy replication and well defined API. 

![image](/architecture_seedhub.png)

*The advantage that CouchDB provides, compared to other databases, is that it includes a Standard HTTP API which can be used directly by users and developers - allowing them to communicate with the database through the standard CouchDB protocol.*

## Data Accessibility 

We can be very creative with the types of **User Interfaces** we create with this data. We can build desktop or web applications that are dynamically in-sync with our database. We can allow people to download a local copy of the entire database on their local computer/network - this is perfect for people with low connectivity. 

Here's some examples of applications that could run on this system:

- Statistical apps
- Map apps with [ArcGIS](http://www.arcgis.com/home/) or [Google Maps](http://code.google.com/apis/maps/index.html)
- Highly advanced search apps for C&E filtering

*more to come…*



