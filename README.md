# Closing the Gap in Non-Latin Script Data

The project aims to facilitate research in Digital Humanities projects dealing with Non-Latin Script in Latin Script environments. One of our goals is to gather and provide information on existing projects. As a first step, this repository is meant to contain basic information on research or infrastructure projects, initiatives and/or related institutions in a structured way.

The repository also contains a markdown-file that includes information on resources gathered on the way. Feel free to distribute and contribute.

GUI (in development): https://closing-the-gap-in-nls-dh.github.io/

## Contact
Jonas Müller-Laackman

[@Freie Universität Berlin](https://www.geschkult.fu-berlin.de/e/semiarab/arabistik/Seminar/Mitarbeiterinnen-und-Mitarbeiter/Wissenschaftliche-Mitarbeiterinnen-und-Mitarbeiter/mueller-laackman/index.html)

[@Github](https://github.com/Jomula)

[@Orcid](https://orcid.org/0000-0003-2279-6751)

## Contribution / Scheme Documentation

In case you want to participate in collecting material for the collection of resources and projects, please follow this scheme.

The scheme underlies continuous development. Existing entries are going to be automatically updated to newer versions of the schemes as far as possible. In case of issues, the creator or last editor will be contacted.

Feel free to discuss the scheme in the GitHub issues.

### JSON Scheme for Project Index / UUID Dictionary (`v0.1.0`)

```javascript
{
  ...
  // UUID of the project: Full title of the project
  "{uuid}": "{title}",
  ...
}
```

### JSON Scheme for Projects (`v0.1.0`)

```javascript
{
  "record_metadata": {
    // Universally Unique Identifier for each project 
    "uuid": "",
    // YYYY-MM-DD
    "record_created": "",
    // Name of the record's creator: Surname, Forename
    "record_created_by": "",
    // Array of modifications
    "record_modified": [
      {
        // YYYY-MM-DD
        "record_modified_at": "",
        // Name of the record's last editor: Surname, Forename
        "record_modified_by": ""
      }
    ]
  },
  "project": {
    // Official title of the project
    "title": "",
    // __Optional__: Abbreviation
    "abbr": "",
    // Type of the project: organisation | association | research | meta
    "type": "",
    // Array of Authority file URIs 
    "ref": [
        ""
    ],
    // Array of active terms in format: YYYY-MM-DD
    "date": [
        {
            "from": "",
            "to": ""
        }
    ],
    // Array of project websites
    "website": [
        "",
    ],
    // Description of the project
    "project_desc": "",
    // Array of Locations
    "places": [
      {
        "place_name": {
          // Name of the place
          "text": "",
          // Array of Authority file URIs
          "ref": [
            ""
          ]
        },  
      }          
    ],
    // Array of languages used in the project's presentation (website, flyer, ...) in ISO-639-2
    "lang": [
      ""          
    ],
    "topic_relations": {
      // If no information is available: null, otherwise: true|false
      "nls": true, // Is the project related to Non-Latin Scripts?
      "dh": true, // Is the project related to Digital Humanities?
      "rdm": true, // Is the project related to Research Data Management?
      "infrastructure": true, // Is the project related to infrastructure?
    },
    "parents": [
      // For each parent-project
      // 1. if of type ( organisation |association ) and no UUID is given:
      {
        // organisation | association
        "type": "",
        "org_name": { 
          // name of the organisation
          "text": "", 
          // Array of Authority file URIs  
          "ref": [
            ""
          ],
        },
        // Array of Websites
        "website": [
          ""
        ],
        // Array of Locations
        "places":[
          {
            "place_name": {
              // Name of the place
              "text": "",
              // Array of Authority file URIs 
              "ref": [
                ""
              ]
            },  
          }
        ]
      },       
      // 2. if of type ( research | meta ) and no UUID is given:
      {
        // research | meta
        "type": "",
        // name of the project
        "title": ""
        // Array of Authority file URIs 
        "ref": [
          ""
        ],
        // Array of Websites
        "website": [
          ""
        ],
        // Array of Locations
        "places":[
          {
            "place_name": {
              // Name of the place
              "text": "",
              // Array of Authority file URIs 
              "ref": [
                ""
              ]
            },  
          }
        ]
      },   
      // 3. if of type ( research | meta ) and has a UUID:
      {
        // research | meta
        "type": "",
        // Official title of the project
        "title": "",
        // UUID of the project
        "uuid": ""
      },
      // 3. if of type ( organisation | association ) and has a UUID:
      {
        // organisation | association
        "type": "",
        "org_name": {
          // name of the organisation
          "text": "",
          // Array of Authority file URIs 
          "ref": [
              ""
          ]
        },
        "uuid": "",
      }
    ],
    // Children are handled the same way as parents
    "children": [],
    // Siblings (e.g. partner projects) are handled the same way as parents
    "siblings": [],
    // Array of relevant contacts
    "contacts": [
      {
        "pers_name": {
          // Name of the contact
          "text": "",
          // Array of Authority file URIs 
          "ref": [
              ""
          ],
        },
        // Role of the contact:
        // 0 = Management (e.g. PI, Coordinator, ...)
        // 1 = Employee (e.g. Research Assistant, ...)
        // 2 = Student Employee (e.g Student Assistant, ...)
        // 3 = Contractor or Honorar staff
        "role": 0,
        // Array of institutional and/or personal websites
        "website": [
          ""
        ]           
      }         
    ],
    "research_data": {
      // Array of languages of the research data in ISO-639-2
      "lang": [
        ""
      ]
      // More information on research data to be added in a later version
    },
    // Stack: To be added in a later version
    "stack": {},
    // Policies: To be added in a later version
    "policies": {}, 
    // Array of keywords for the project, including all relevant languages in ISO-639-2
    "keywords": [
        ""
    ],
    // Comment on the entry, the project or field for any information that doesn't fit anywhere else
    "comment": "",
  }
}
```

### JSON Scheme for Resources (`v0.1.1`)

```javascript
{
  // Valid main values for parent entries in field "type" can be extended by colon notation, e.g. "language:query:xml". For children, main value may vary, e.g. "framework".
  "type": "other|language|db|reference|authority|org|literature|journal",
  // Title of entry.
  "label": "",
  // Link to documentation or website.
  "ref": "",
  // Comment or description.
  "comment": "",
  // Tags to describe the item and make it easier to find. Empty if none given, but it is highly advised to provide at least a couple of tags.
  "tags": [
    "#tag",
  ],
  // __Optional__: Provide relation between frameworks and their languages. Array of Objects with the same scheme as parent.
  "frameworks": [],
  // Credit for collecting.
  "collected_by": {
    // Name of collector.
    "name": "",
    // Reference link, e.g. URI or URL to website or Orcid-Profile.
    "ref": ""
  },
  // __Optional__: Credit for editing.
  "edited_by": {
    // Name of editor.
    "name": "",
    // Reference link, e.g. URI or URL to website or Orcid-Profile.
    "ref": ""
  }
}

```

