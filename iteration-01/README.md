# Iteration 01: XML documents, schema, validation

In the first iteration, you will build upon the knowledge of XML and data modeling.

When you are finished with the iteration, push your work to Gitlab and create a **Merge Request**. If the pipeline *succeeds*, you can **assign** your teacher as a **Reviewer** and **Assignee**.

Good luck!

# Product price comparison website (Heureka)

Your task is to use the ERD diagram you have worked on at the first seminar (Heureka ERD).  
If you have not finished the diagram yourself (or in a group), you can use the one provided in the Interactive Syllabus.

At this stage, your diagram should contain at least five entities and each entity should have several **meaningful** attributes; if your diagram does not satisfy these conditions, you will need to extend it.

In this iteration, you will need to do the following tasks:  

## 1. Extend the ERD diagram

Heureka is a website where you can compare different prices of products.  
Often, you can also read a review of a specific product or a store.  

Therefore, extend the ERD diagram as follows:
- Add two new entities named Review and Customer
- Add several **meaningful** attributes for each entity
- Create associations between Review and Customer
- Make associations between the new entities and entities already present in your diagram as necessary

After finishing this task, put your `heureka.puml` file and the corresponding generated `heureka.png` file into the `diagrams` folder.

## 2. Create an XML schema

Your second task is to create an XML Schema (XSD) of the finished ERD diagram from the first task.

Keep in mind to model the schema in a **non-relational way** (i.e. map the data from the point of view of a specific entity - just as you did during the seminar).

Save the XML Schema into `schema.xsd` and make sure it is valid.

## 3. Create a dataset

Your last task is to create an XML file that can be successfully validated using your schema (XSD) from the previous task.

- Each entity should have 2 or more example elements
- Add at least 3 different attributes (across the whole document)

Save the XML Schema into `data.xml`.

## 4. Validate your files

You can validate the `data.xml` file yourself using online validators, such as:

- [freeformatter.com](https://www.freeformatter.com/xml-validator-xsd.html)
- [utilities-online.info](https://www.utilities-online.info/xsdvalidation)

Or using the [XML extension from Red Hat](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml) in VS Code.  
A tutorial to setup the validation is available [here](https://github.com/redhat-developer/vscode-xml/blob/main/docs/Validation.md#validation-with-xsd-grammar).
