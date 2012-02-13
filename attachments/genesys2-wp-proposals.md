# Genesys 2 Work Packages proposals

## Partnership development

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

### Proposed implementation

1. [GRIN-Global](http://www.grin-global.org/index.php/Main_Page) will be installed on genebanks networks and serve as primary instrument for allowing germplasm data to be transferred to Genesys. Using a solution such as GRIN-Global will force genebanks' data-curators to store germplasm information using highly specific computer standards. By doing so, data can more easily be analyzed and searched upon.

2. For genebanks unable to install GRIN-Global, a system such as [Web Harvesting](http://en.wikipedia.org/wiki/Web_harvesting) will be used. Genebanks will need to put their data online as HTML formatted websites. Genesys will then automatically gather data from these websites. This allows genebanks to make their data available to Genesys with very little effort. In most cases, genebanks already have websites that we can start using for this data-exchange process.

3. To agree on data sharing formats, [Crop Ontology](http://www.cropontology.org/) will be used. It will serve as a central repository for documenting the standards used by the various genebanks. For example, one genebank might be measuring the *plant height* of *Rice* using *centimetres*. Another genebank might be using *inches* for the same trait. All these standards will be documented in the Crop Ontology. By doing so we'll be able to identify traits and convert them into specific formats when searches are performed on this data.

## Data loading mechanisms

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

### Proposed implementation

1. **Direct Data Control** (DDC). The current application capable of letting users upload their datasets into Genesys.

2. **Staging Area** will provide the same functionalities as the DDC, but through a web-interface. This will make the upload system available to a broader audience without obligating users to install an application.

3. **Web Scraping**. A system that will automatically download data from a genebank's website. The automated exchange process will facilitate the acquisition of data, allowing Genesys to reach sources of information that it couldn't before.

4. **GRIN-Global web-services**. Once GRIN-Global will be installed on the genebank's networks, Genesys will be able to communicate directly with the genebank's database using standard web-services. This will simplify and automate the data-exchange process.

5. All the exchanges of data will happen through standard network protocols (such as HTTP) and the data formats will be documented using the [Crop Ontology](http://www.cropontology.org/) tool. Using standard protocols will allow Genesys to use available software libraries without rewriting everything from scratch.

## Data curation

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

### Proposed implementation

1. The [Crop Ontology](http://www.cropontology.org/) will serve as a central place for curators to share and discuss data standards.

