# Genesys 2 *(DRAFT)*

*Older document can be found [here](proposal.html)*.

In this proposal I'll extrapolate the main concepts out of the *6 work-packages* and provide implementation details regarding each one of them.

- [Redesigning the Interface](#ui)
- [Building a Platform](#)
- ...

## <a name="ui"></a> Redesigning the Interface

A software project should always start by building its [User Interface](http://en.wikipedia.org/wiki/User_interface). Even though software is made out of many different components, the foremost concern should be appearance—what and how information is presented.

The designer should ask: What is relevant information? What questions will the viewers ask? What situations will they want to compare? What decisions are they trying to make? How can the data be presented most effectively? How can the visual vocabulary and techniques of graphic design be employed to direct the user’s eyes to the solution? The designer must start by considering what the software looks like, because the users are using it to learn, and they learn by looking at it.

Genesys main feature is to provide a way for people to search (and order) **Germplasm accessions**. If a user is searching for this information, what questions might they have? 

- Where do I find samples with specific trait values?
- Where do I find samples with specific passport information?
- Which Genebank holds them?
- Can I download experiments associated to an accession?

The user will use the answers to compare the available Germplasm and decide upon which ones to order.

#### Where do I find samples with specific trait values? 

Consider this redesign:

![img](traits.jpg)    

The user is guided through the process of selecting a range of values for a number of traits. They can then filter and download the portion of samples they're interested in. They were able to answer their question immediately, through a single page interface.

#### Where do I find samples with specific passport information?


*more to come…*