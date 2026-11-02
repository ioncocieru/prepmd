/* ITS PREP — integrated question bank; original IDs preserved. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.databases = {
  "id": "databases",
  "name": "Databases",
  "shortLabel": "DB",
  "accent": "#17A398",
  "description": "Proiectarea și interogarea bazelor de date relaționale: DDL, DML, extragere și depanare de date.",
  "CHAPTERS": [
    {
      "id": "proiectare",
      "name": "Proiectarea bazelor de date"
    },
    {
      "id": "ddl-obiecte",
      "name": "Administrarea obiectelor (DDL)"
    },
    {
      "id": "extragere-date",
      "name": "Extragerea datelor (SELECT)"
    },
    {
      "id": "manipulare-date",
      "name": "Manipularea datelor (DML)"
    },
    {
      "id": "depanare",
      "name": "Depanare și optimizare"
    }
  ],
  "QUESTIONS": [
    {
      "id": "db-001",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement about relational database storage, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Data in a relational database is primarily organized in tables.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Queries are the primary structures used to permanently store all database data.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A table organizes data in rows and columns.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Yes / No / Yes. Tables are the primary logical storage structures: each row records an occurrence of an entity and each column describes an attribute. A query is an instruction for retrieving or changing data; storing its definition does not turn it into the primary container for every record. A query result can also look like rows and columns, but that does not make queries the underlying storage organization. The last statement correctly describes the two-dimensional structure of a table."
    },
    {
      "id": "db-002",
      "chapter": "proiectare",
      "type": "single",
      "question": "The component that holds information for a single entry in a table is called a:",
      "options": [
        "Data type",
        "Row",
        "Column",
        "Attribute"
      ],
      "correct": 1,
      "explanation": "A row holds the values for one entry, such as one student's ID, name and address. A column holds a particular field across entries, so the Name column alone is not a complete student record. Attribute is the relational-model term for such a field rather than an entire entry. A data type specifies the values a column can represent, such as INT or VARCHAR; it describes the representation of data, not the record that contains it."
    },
    {
      "id": "db-003",
      "chapter": "proiectare",
      "type": "single",
      "question": "Evaluate the following statement. A row holds information for a single record in a table. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "Column",
        "Data type",
        "View"
      ],
      "correct": 0,
      "explanation": "No change is needed: a row is the collection of column values belonging to one record. For example, one student's identifier and contact details occupy one row. Replacing row with column would describe one attribute across multiple records rather than a complete record. A data type controls a value's representation and allowed domain. A view exposes the result of a stored query and may contain many rows; it is not the name for a single table record."
    },
    {
      "id": "db-004",
      "chapter": "proiectare",
      "type": "single",
      "question": "Evaluate the following statement. In a database table, each column represents a unique record. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "Table",
        "Index",
        "Row"
      ],
      "correct": 3,
      "explanation": "Replace column with row. Each row represents one record, while each column represents an attribute of those records. The original statement confuses the table's vertical organization with its horizontal organization. A table is the complete collection of records, not the individual record. An index is an access structure used to locate records efficiently and may contain selected key values and row locators. Neither table nor index repairs the statement's intended distinction between records and attributes."
    },
    {
      "id": "db-005",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store the contact information for each student in your school database. You should store each student's information in a:",
      "options": [
        "Stored procedure",
        "Function",
        "Row",
        "Variable"
      ],
      "correct": 2,
      "explanation": "Store each student's contact information in a row of the student table. The columns specify the separate contact attributes, and that student's row supplies their values. A stored procedure contains executable database logic rather than acting as the record itself. A function computes and returns a result. A variable holds a value during execution and is not a persistent collection of student records. These executable objects may read or write the table, but they do not replace the row-based organization of the stored data."
    },
    {
      "id": "db-006",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Match each database term to the correct description.",
      "dragItems": [
        {
          "id": "a",
          "text": "Field"
        },
        {
          "id": "b",
          "text": "Column"
        },
        {
          "id": "c",
          "text": "Table"
        },
        {
          "id": "d",
          "text": "Row / Record"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A horizontal collection describing one record",
          "correctItemId": "d"
        },
        {
          "id": "z2",
          "label": "A vertical collection for one attribute",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A single stored data value at a row/column position",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "A structure that organizes data in rows and columns",
          "correctItemId": "c"
        }
      ],
      "explanation": "The horizontal collection is Row / Record; the vertical collection is Column; the single value at their intersection is Field; and the complete row-and-column structure is Table. For instance, a student's row intersects the LastName column at that student's surname value. This item uses field to mean an individual cell value, although field is sometimes used informally for a column. Follow the supplied descriptions rather than interchanging row and column: one describes a record and the other an attribute across records."
    },
    {
      "id": "db-007",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "You are structuring a table in a relational database. Instructions: For each of the following statement, select Yes if the statement is true. Otherwise, select No. Use the relational model (a relation is a set of tuples), not an unconstrained SQL table that can contain duplicate rows.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Each value in a field in a table must be unique.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Each row in a table must be unique.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Each column name in a table must be unique.",
          "correctItemId": "a"
        }
      ],
      "explanation": "No / Yes / Yes under the explicitly stated relational-model interpretation. Values in an ordinary attribute can repeat: many students may share a city. A relation is a set of tuples, so it does not contain duplicate complete tuples. Attribute names within a relation must be distinguishable. This is not a claim that every unconstrained SQL table automatically rejects duplicate rows: SQL normally uses bag semantics, and keys or uniqueness constraints are needed to enforce the desired uniqueness in an actual table."
    },
    {
      "id": "db-008",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store the first name, last name, and student ID for 100 students. This information will be stored in a table as:",
      "options": [
        "100 items and three cells.",
        "100 rows and three columns.",
        "three rows and 100 columns.",
        "three items and 100 cells."
      ],
      "correct": 1,
      "explanation": "Use 100 rows and three columns. Each of the 100 students contributes one record, while first name, last name and student ID are three different attributes. Reversing these quantities would incorrectly make students into separate attributes and place the three field names in rows. The choices expressed as items and cells do not describe the table's structure correctly. There would be 100 × 3 = 300 data-value positions, not merely 100 cells, assuming each listed attribute is stored once per student."
    },
    {
      "id": "db-009",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two elements are required to define a column? (Choose two.)",
      "options": [
        "A name",
        "A key",
        "An index",
        "A data type"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "A column needs a name and a data type. The name lets statements identify the attribute, and the type determines its permitted representation, such as integer, character string or date. A key is an additional constraint used for identification or relationships; many ordinary columns are not keys. An index is an optional access structure, not a mandatory part of every column definition. Constraints and indexes may be added when required by the design, but they are not the two basic elements requested here."
    },
    {
      "id": "db-010",
      "chapter": "proiectare",
      "type": "single",
      "question": "What defines the amount of storage space that is allocated to a value in a column?",
      "options": [
        "data type",
        "foreign key",
        "view",
        "ORDER BY clause"
      ],
      "correct": 0,
      "explanation": "The data type controls the representation and storage characteristics of a column value. For example, SQL Server integer types have fixed storage sizes, while variable-length character storage also depends on the actual length and declared limit. This does not mean every value of every type uses the same number of bytes. A foreign key enforces a reference, a view defines a query, and ORDER BY controls result ordering. None of these determines the underlying value's numeric or character storage representation."
    },
    {
      "id": "db-011",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store whole-number product quantities. From the available choices, which data type is appropriate without using a floating-point type?",
      "options": [
        "INTEGER",
        "DOUBLE",
        "COUNT",
        "FLOAT"
      ],
      "correct": 0,
      "explanation": "INTEGER is appropriate for whole-number quantities without choosing a floating-point type. FLOAT and DOUBLE are approximate numeric types intended for values with floating-point representation; they are unnecessary for a simple integral count and can introduce rounding issues. COUNT is an aggregate function that counts rows or non-NULL expressions, not a column data type. The exact integer size should still be chosen to cover the required range, but among these options INTEGER is the only ordinary exact whole-number type."
    },
    {
      "id": "db-012",
      "chapter": "proiectare",
      "type": "single",
      "question": "In SQL Server, choose the smallest listed integer type that can store all whole numbers from 1 through 100. This range will not change.",
      "options": [
        "Bit",
        "Tinyint",
        "Smallint",
        "Integer"
      ],
      "correct": 1,
      "explanation": "TINYINT is the smallest listed SQL Server integer type that covers every integer from 1 through 100. It uses one byte and stores 0 through 255. BIT is smaller conceptually but represents only 0, 1 or NULL, so it cannot hold values such as 25 or 100. SMALLINT uses two bytes and INT uses four; both cover the range but consume more storage for each value. The fixed range makes their additional capacity unnecessary for this question."
    },
    {
      "id": "db-013",
      "chapter": "proiectare",
      "type": "single",
      "question": "You have a column that will only contain values from 0 to 1024. What is the most economical data type to use for the column?",
      "options": [
        "INT",
        "TINYINT",
        "DECIMAL(3)",
        "SMALLINT"
      ],
      "correct": 3,
      "explanation": "SMALLINT covers 0 through 1024 using two bytes in SQL Server. TINYINT uses one byte but stops at 255, so it cannot represent the complete required range. INT also covers the range but uses four bytes, making it less economical here. DECIMAL(3) has precision three and default scale zero, so its maximum positive value is 999; it cannot hold 1024. Choosing the smallest listed type is useful only after confirming that every required value fits."
    },
    {
      "id": "db-014",
      "chapter": "proiectare",
      "type": "single",
      "question": "When you are defining the cost of a product, it is best to use the ___________ data type.",
      "options": [
        "int",
        "varchar",
        "decimal",
        "bit"
      ],
      "correct": 2,
      "explanation": "DECIMAL is the best listed type for product cost because it stores exact base-ten numeric values with a chosen precision and scale. A practical definition must specify sufficient precision and a scale appropriate for the currency; DECIMAL without a scale may not retain cents as intended. INT cannot directly store fractional currency units unless the application deliberately stores minor units. VARCHAR stores text rather than directly usable numeric amounts, and BIT stores a binary flag rather than a price."
    },
    {
      "id": "db-015",
      "chapter": "proiectare",
      "type": "single",
      "question": "What type of data type would you use to store true/false or yes/no answers?",
      "options": [
        "Int",
        "Float",
        "Bit",
        "Char"
      ],
      "correct": 2,
      "explanation": "BIT is the SQL Server type intended for binary flags such as yes/no or true/false. Its values are 0 and 1, with NULL also possible if the column is nullable. A NOT NULL constraint is needed when every answer must be present. INT can encode a flag but permits a much wider numeric range and uses more storage. FLOAT is an approximate numeric type, while CHAR stores characters; neither expresses the intended binary domain as directly as BIT."
    },
    {
      "id": "db-016",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to store product names that vary from three to 30 characters. You also need to minimize the amount of storage space that is used. Which data type should you use?",
      "options": [
        "VARCHAR (3, 30)",
        "CHAR (3, 30)",
        "VARCHAR (30)",
        "CHAR (30)"
      ],
      "correct": 2,
      "explanation": "VARCHAR(30) stores variable-length names up to the declared limit, rather than padding every short name to 30 characters as CHAR(30) does. The forms VARCHAR(3,30) and CHAR(3,30) are not valid declarations for a minimum and maximum string length. The size argument is a maximum capacity, not a lower-bound constraint. If names must contain at least three characters, enforce that separately with validation or a CHECK constraint. Among the listed choices, VARCHAR(30) best matches variable lengths and storage efficiency."
    },
    {
      "id": "db-017",
      "chapter": "proiectare",
      "type": "single",
      "question": "Product names vary in length and may contain characters from multiple languages. Which data type is the best fit? Assume the SQL Server data types taught in this item; NVARCHAR is the explicit Unicode choice.",
      "options": [
        "CHAR",
        "VARCHAR",
        "NCHAR",
        "NVARCHAR"
      ],
      "correct": 3,
      "explanation": "NVARCHAR combines variable-length storage with SQL Server's explicit Unicode character representation, matching names of different lengths in multiple languages. NCHAR also supports Unicode but uses fixed-length storage, making it less suitable when the actual name lengths vary. CHAR is fixed length and VARCHAR is the conventional non-Unicode choice in the introductory model specified here. Modern UTF-8 collations can change the capabilities of VARCHAR, but the stem deliberately identifies NVARCHAR as the explicit Unicode choice rather than asking about those configurations."
    },
    {
      "id": "db-018",
      "chapter": "proiectare",
      "type": "single",
      "question": "You are creating a table to store customer data. The AccountNumber column uses values that always consist of one letter and four digits. Which data type should you use for the AccountNumber column?",
      "options": [
        "CHAR",
        "BYTE",
        "DOUBLE",
        "SMALLINT"
      ],
      "correct": 0,
      "explanation": "CHAR is appropriate for an identifier that always contains five characters: one letter followed by four digits. A suitable declaration would be CHAR(5). Keeping the identifier as text preserves its letter and any leading zeroes in the digit portion. SMALLINT and DOUBLE are numeric representations and cannot directly hold the letter. BYTE is not the appropriate SQL Server character-string type. CHAR alone does not enforce the letter/digit pattern; a separate constraint or validation rule is needed for that business requirement."
    },
    {
      "id": "db-019",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each of the following statements, select Yes if the statement is true and No if it is not.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Char(size) holds a fixed-length string.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Text holds a fixed-length string.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Varchar(size) can hold a string of differing lengths.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Yes / No / Yes. CHAR(size) is fixed length and pads shorter strings according to the DBMS's character-storage rules. TEXT is a variable-length text type, not a fixed-length string type; in SQL Server it is also a legacy type for which newer designs normally use VARCHAR(MAX). VARCHAR(size) allows different stored string lengths up to its limit. A length declaration restricts capacity, but it does not require every VARCHAR value to contain exactly that many characters."
    },
    {
      "id": "db-020",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select No. Each correct selection is worth one point.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The VARCHAR data type contains only numeric characters.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "The NUMERIC data type contains only numbers that have decimal places.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "The INT data type contains only whole numbers.",
          "correctItemId": "a"
        }
      ],
      "explanation": "No / No / Yes. VARCHAR can contain alphabetic characters, punctuation and digits, so it is not restricted to numeric characters. NUMERIC is an exact numeric type whose precision and scale determine what it can store; whole numbers are valid too, so values need not have a nonzero fractional part. INT stores whole numbers, not fractional values. These statements describe the non-NULL value domains; whether NULL is permitted is controlled separately by the column's nullability."
    },
    {
      "id": "db-021",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "You have a database table that stores information about school attendance. You have a data set that is defined as follows: You have the following requirements: • StudentName must consist of a string of characters. • GradeLevel must be only a whole number. • DaysAbsent can have one number after the decimal. Match the data types to the column names.",
      "dragItems": [
        {
          "id": "a",
          "text": "VARCHAR"
        },
        {
          "id": "b",
          "text": "DECIMAL"
        },
        {
          "id": "c",
          "text": "INT"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "StudentName",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "GradeLevel",
          "correctItemId": "c"
        },
        {
          "id": "z3",
          "label": "DaysAbsent",
          "correctItemId": "b"
        }
      ],
      "explanation": "StudentName maps to VARCHAR because it contains a character string. GradeLevel maps to INT because the requirement restricts it to whole numbers. DaysAbsent maps to DECIMAL because fractional days must be retained exactly; an appropriate declaration would specify scale 1 and sufficient precision for the maximum absence count. INT would discard or reject the fractional information and VARCHAR would treat it as text. The mapping chooses type families, not an invented maximum length or numeric range that the question has not supplied.",
      "code": "StudentName | GradeLevel | DaysAbsent\nJohn        | 12         | 2.5\nHolly       | 12         | 0.0\nDavid       | 12         | 3.0"
    },
    {
      "id": "db-022",
      "chapter": "proiectare",
      "type": "single",
      "question": "You work at a coffee shop. They ask you to set up a website that stores charges on purchases. You need to recommend a data type in a database table to run financial functions against the charged amounts. Which data type should you recommend?",
      "options": [
        "DECIMAL",
        "BIT",
        "VARCHAR",
        "BINARY"
      ],
      "correct": 0,
      "explanation": "DECIMAL stores the charged amounts as exact decimal numbers that can be summed, compared and used in financial calculations. The actual declaration should choose sufficient precision and the currency's required scale. BIT represents a binary flag, so it cannot represent purchase amounts. VARCHAR stores character strings and would require conversion before arithmetic. BINARY stores byte sequences rather than an ordinary financial numeric value. Exact numeric storage avoids the representation errors associated with approximate floating-point values, although rounding policies still need to be defined."
    },
    {
      "id": "db-023",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which constraint designates the table’s primary non-NULL row identifier?",
      "options": [
        "PRIMARY KEY",
        "FOREIGN KEY",
        "VIEW",
        "DEFAULT"
      ],
      "correct": 0,
      "explanation": "PRIMARY KEY designates the table's primary row identifier and enforces uniqueness and non-NULL values across its key columns. A composite primary key identifies rows by the combination rather than requiring each component to be unique separately. FOREIGN KEY enforces references to an eligible key and may repeat in the referencing table. A VIEW is a query-defined object, not a uniqueness constraint. DEFAULT supplies a value when one is omitted; it does not make records distinct or forbid NULL in general."
    },
    {
      "id": "db-024",
      "chapter": "proiectare",
      "type": "single",
      "question": "You accept an IT internship at a local charity. The charity wants you to help them with compliance and auditing requirements. You need to ensure that a column or combination of columns uniquely identifies each row of a table. Which constraint should you define?",
      "options": [
        "Primary key",
        "Secondary key",
        "Foreign key",
        "Default key"
      ],
      "correct": 0,
      "explanation": "Define a primary key on the identifying column or combination of columns. The database then rejects duplicate key combinations and NULL key values, allowing each row to be addressed unambiguously. A foreign key serves a different purpose: it validates a relationship to another eligible key and need not uniquely identify the child row. Secondary key is not the requested primary identifying constraint, and default key is not the SQL constraint for row identity. A DEFAULT value alone provides no uniqueness guarantee."
    },
    {
      "id": "db-025",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "You accept an IT internship at a local charity. The charity has two tables in their data model named Chapter and Language, as defined below: You create a third table named ChapterLanguage to relate the Chapter table and the Language table. You need to select columns from the Chapter and Language tables to create a composite primary key for the ChapterLanguage table. Which two columns should you select? (Choose two.)",
      "options": [
        "ChapterId",
        "LanguageId",
        "Country",
        "Region",
        "City",
        "LanguageName"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Use ChapterId and LanguageId together as the composite primary key of ChapterLanguage. The image shows these identifiers as the distinguishing values for the two parent entities. The pair identifies one chapter/language association while permitting a chapter to have several languages and a language to belong to several chapters. Country, Region and City describe location rather than uniquely identifying every chapter. LanguageName also repeats: English, Spanish and French each appear for different locales. A descriptive name therefore cannot replace LanguageId safely in this relationship key.",
      "image": "assets/databases/pdf-060-chapter-language.png",
      "imageAlt": "chapter language"
    },
    {
      "id": "db-026",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each of the following statements, select Yes if the statement is true and No if the statement is false.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An enforced foreign key requires non-NULL referencing values to match a referenced candidate key",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "A table can contain only one Foreign Key",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A foreign key may reference a primary key or a suitable unique key, including in the same table",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "A NULL single-column foreign key does not require a matching parent row",
          "correctItemId": "a"
        }
      ],
      "explanation": "Yes / No / Yes / Yes. An enforced foreign key validates non-NULL references against an eligible primary or unique key. A table may have several foreign keys, such as separate references to Customer and Product. The parent can be another table or the same table, as in an employee's manager relationship. A NULL single-column foreign key represents an absent reference and does not require a parent row with a NULL key. Mandatory relationships require NOT NULL in addition to the foreign-key constraint."
    },
    {
      "id": "db-027",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement about the relationship between Department and Employee, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Employee.DepartmentID can be a foreign key that references Department.DepartmentID.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "A foreign key helps prevent assigning an employee to a department that does not exist.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Employee.DepartmentID must be the primary key of Employee in order to create the relationship.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Yes / Yes / No. Employee.DepartmentID may reference Department.DepartmentID when the latter is an eligible unique or primary key. The constraint prevents non-NULL employee references from naming a department that is absent. Employee.DepartmentID need not be Employee's primary key: many employees can legitimately work in the same department. Employee normally has its own identifier for distinguishing employees. If every employee must have a department, add NOT NULL; the foreign-key relationship alone may allow an unassigned employee through NULL."
    },
    {
      "id": "db-028",
      "chapter": "proiectare",
      "type": "single",
      "question": "You have two tables named Salesperson and Sales. You need to ensure that each record in the Sales table has a valid associated salesperson record in the Salesperson table. Which database object should you add to the Sales table?",
      "options": [
        "Nonclustered index",
        "Primary key",
        "Foreign key",
        "Clustered index"
      ],
      "correct": 2,
      "explanation": "Add a foreign key from the salesperson identifier in Sales to the appropriate key in Salesperson. It rejects a non-NULL salesperson value that has no parent record, enforcing the association. If every sale must have a salesperson, the referencing column also needs NOT NULL. A primary key distinguishes sales records but does not validate salespeople. Clustered and nonclustered indexes can improve access paths; an ordinary index alone does not impose referential integrity between these two tables."
    },
    {
      "id": "db-029",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "State.StateID is designated as State's primary row identifier, and Address references State through StateID. Complete each statement.",
      "dragItems": [
        {
          "id": "a",
          "text": "primary key"
        },
        {
          "id": "b",
          "text": "foreign key"
        },
        {
          "id": "c",
          "text": "union"
        },
        {
          "id": "d",
          "text": "index"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "StateID is a/an ______ in the State table.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "StateID is a/an ______ in the Address table.",
          "correctItemId": "b"
        }
      ],
      "explanation": "StateID is the primary key in State under the stated identifying-key assumption, and it is a foreign key in Address. Several addresses can share one StateID because the child-side reference need not be unique. A UNION combines compatible query result sets rather than establishing the relationship. An index is an access structure and does not, by itself, express the parent/child reference. Mere uniqueness would also permit StateID to be an alternate unique key; the clarified stem explicitly makes it the State identifier for this mapping."
    },
    {
      "id": "db-030",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two keys establish a relationship between two tables? (Choose two.)",
      "options": [
        "candidate",
        "foreign",
        "superkey",
        "local",
        "primary"
      ],
      "correct": [
        1,
        4
      ],
      "explanation": "Choose foreign and primary. In the usual introductory design, a foreign key in the child table references the parent's primary key, connecting the related records. A suitable unique candidate key can also be a foreign-key target in real SQL systems; this does not make every candidate or superkey a relationship declaration. Superkey describes an attribute set that uniquely identifies a row, and local is not the required SQL constraint category. The question asks for the conventional two-key pairing, not every possible theoretical key classification."
    },
    {
      "id": "db-031",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Using only the displayed Students table, match each student to the numeric CourseID recorded for that student. Course names are not needed for this exercise.",
      "image": "assets/databasesimg/q031_1.png",
      "dragItems": [
        {
          "id": "a",
          "text": "CourseID 1"
        },
        {
          "id": "b",
          "text": "CourseID 2"
        },
        {
          "id": "c",
          "text": "CourseID 3"
        },
        {
          "id": "d",
          "text": "CourseID 4"
        },
        {
          "id": "e",
          "text": "CourseID 5"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Brad",
          "correctItemId": "d"
        },
        {
          "id": "z2",
          "label": "Joe",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Susan",
          "correctItemId": "b"
        }
      ],
      "explanation": "Brad maps to CourseID 4, Joe to CourseID 1 and Susan to CourseID 2, exactly as recorded in the displayed CourseID column. CourseIDs 3 and 5 are unused distractors because neither occurs in these three student rows. Read the CourseID field, not StudentID: Joe's StudentID is 2 but his CourseID is 1, while Susan's StudentID is 3 but her CourseID is 2. A course identifier is a reference value, not a course name; no course-name lookup is required or implied by this revised exercise."
    },
    {
      "id": "db-032",
      "chapter": "proiectare",
      "type": "single",
      "question": "Among the following, which sets limits or rules placed on a table or a column to ensure that the data is considered valid for a database?",
      "options": [
        "checker",
        "validator",
        "scanner",
        "constraint"
      ],
      "correct": 3,
      "explanation": "A constraint is a database rule that restricts allowed data, such as NOT NULL, CHECK, UNIQUE or FOREIGN KEY. For example, CHECK can reject negative quantities and a foreign key can reject nonexistent parent identifiers. Checker, validator and scanner are not the standard SQL object category for table and column integrity rules. Application validation can supplement database constraints, but it does not change the terminology requested here. Constraints are enforced by the DBMS when relevant data changes are attempted."
    },
    {
      "id": "db-033",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Match each scenario to the correct relationship type. Assume each employee has exactly one recorded passport and each passport belongs to exactly one employee. For Teacher ↔ Classes, each teacher may teach several classes, and each class has exactly one teacher.",
      "dragItems": [
        {
          "id": "a",
          "text": "Teacher ↔ Classes"
        },
        {
          "id": "b",
          "text": "Employee ↔ Passport"
        },
        {
          "id": "c",
          "text": "Students ↔ Courses"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "One-to-One",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "One-to-Many",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Many-to-Many",
          "correctItemId": "c"
        }
      ],
      "explanation": "Employee ↔ Passport maps to one-to-one under the explicit rule that each employee has exactly one recorded passport and vice versa. Teacher ↔ Classes maps to one-to-many under the clarified rule that one teacher may teach several classes but each class has only one teacher. Students ↔ Courses maps to many-to-many because each side may relate to several records on the other side. The labels depend on these business rules: without the restriction on class ownership, co-teaching could make the teacher/class relationship many-to-many instead."
    },
    {
      "id": "db-034",
      "chapter": "proiectare",
      "type": "single",
      "question": "If a teacher can teach multiple classes, but each class is assigned to only one teacher, what type of relationship does this describe?",
      "options": [
        "One-to-One",
        "One-to-Many",
        "Many-to-Many",
        "Circular relationship"
      ],
      "correct": 1,
      "explanation": "One-to-many describes the relationship from Teacher to Class. One teacher can be associated with several class records, while each class has only one associated teacher. A common implementation stores TeacherID as a foreign key in Class. One-to-one would incorrectly limit a teacher to one class, and many-to-many would allow a class to have several teachers. Circular relationship is not the requested cardinality category. The business rule, rather than the number of current sample records, establishes the relationship type."
    },
    {
      "id": "db-035",
      "chapter": "proiectare",
      "type": "single",
      "question": "What type of relationship exists if a student can enroll in multiple courses, and each course can have multiple students?",
      "options": [
        "One-to-One",
        "One-to-Many",
        "Many-to-Many",
        "Self-referencing"
      ],
      "correct": 2,
      "explanation": "The relationship is many-to-many: one student can take several courses, and one course can contain several students. A relational design normally represents this using an Enrollment junction table with a StudentID reference and a CourseID reference. One-to-many would impose a single related record on one side and would not capture both freedoms. One-to-one is even more restrictive. Self-referencing describes a table relating to itself; the scenario involves two different entity types, so that label does not describe the relationship."
    },
    {
      "id": "db-036",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Model the many-to-many relationship between Machine and Operator using the Assignment junction table.",
      "dragItems": [
        {
          "id": "a",
          "text": "primary key"
        },
        {
          "id": "b",
          "text": "index"
        },
        {
          "id": "c",
          "text": "union"
        },
        {
          "id": "d",
          "text": "foreign key"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Operator.ID is a/an ______ in Operator.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Machine.ID is a/an ______ in Machine.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Assignment.OperatorID is a/an ______ referencing Operator.ID.",
          "correctItemId": "d"
        },
        {
          "id": "z4",
          "label": "Assignment.MachineID is a/an ______ referencing Machine.ID.",
          "correctItemId": "d"
        }
      ],
      "explanation": "The identifiers in Operator and Machine are primary keys in their respective parent tables. Assignment.OperatorID and Assignment.MachineID are foreign keys that connect each assignment to those parent rows. Multiple assignments permit the overall many-to-many relationship without repeating operator or machine descriptions in every parent row. In the pictured diagram the two referencing fields also form Assignment's composite key; being part of a primary key does not prevent a field from simultaneously being a foreign key. Index and union are not substitutes for the referenced-key roles.",
      "code": "Machine(ID PRIMARY KEY, Name, Model)\nOperator(ID PRIMARY KEY, Name, Experience)\nAssignment(MachineID FOREIGN KEY -> Machine.ID,\n           OperatorID FOREIGN KEY -> Operator.ID, Role,\n           PRIMARY KEY (MachineID, OperatorID))",
      "image": "assets/databases/pdf-058-machine-assignment-erd.png",
      "imageAlt": "machine assignment erd"
    },
    {
      "id": "db-037",
      "chapter": "proiectare",
      "type": "single",
      "question": "Assume the business rule says each ProductID determines exactly one ProductCategory. What term describes this dependency?",
      "image": "assets/databases/pdf-079-product-categories.png",
      "options": [
        "Cohort",
        "Relationally dependent",
        "Deterministic",
        "Functionally dependent",
        "Compositional"
      ],
      "correct": 3,
      "explanation": "ProductCategory is functionally dependent on ProductID because the stated rule makes each ProductID determine exactly one category. Different products may still share a category, as the displayed books and movies examples show; functional dependency does not require the reverse mapping to be unique. Cohort and compositional are not the relational dependency term. Deterministic concerns reproducibility of an operation, and relationally dependent is not the formal name of this attribute-level rule. The business rule is important because a small sample alone cannot prove a dependency for all future data.",
      "imageAlt": "product categories"
    },
    {
      "id": "db-038",
      "chapter": "proiectare",
      "type": "single",
      "question": "You have a table that contains the following data. You break the table into the following two tables. This process is referred to as:",
      "images": [
        "assets/databasesimg/q086_1.jpeg",
        "assets/databasesimg/q086_2.jpeg"
      ],
      "options": [
        "defragmentation",
        "normalization",
        "fragmentation",
        "denormalization"
      ],
      "correct": 1,
      "explanation": "This is normalization: the repeated Color1, Color2 and Color3 columns are replaced by separate ProductID/Color rows. For product 4545, Blue, Green and Purple become three occurrences of the same attribute instead of three separately named fields. This supports additional colors without adding another column. Defragmentation concerns physical storage organization, not the logical elimination of repeating groups. Fragmentation partitions data for storage or distribution. Denormalization intentionally introduces redundancy or combines structures; the shown direction instead regularizes repeated attribute values."
    },
    {
      "id": "db-039",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two requirements are characteristic of First Normal Form (1NF)? (Choose two.)",
      "options": [
        "Eliminate repeating groups",
        "Store atomic (single) values in each field",
        "Eliminate all foreign keys",
        "Eliminate all composite keys"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Choose eliminating repeating groups and storing atomic, single values in each field. First Normal Form avoids structures such as Color1/Color2/Color3 or a comma-separated list of several colors in one value when colors are the attribute being modeled. It does not forbid foreign keys: those are a standard way to represent relationships between normalized tables. It also does not forbid composite keys; a combination of columns can validly identify a row. Higher normal forms address additional functional dependencies rather than changing these basic 1NF requirements."
    },
    {
      "id": "db-040",
      "chapter": "proiectare",
      "type": "single",
      "question": "A table has atomic values, no repeating groups, and each row can be uniquely identified. What is the minimum normal form established by these facts, without assuming anything about further dependencies?",
      "options": [
        "1NF",
        "2NF",
        "3NF",
        "5NF"
      ],
      "correct": 0,
      "explanation": "First Normal Form is the minimum form established by the stated properties: atomic values, no repeating groups and identifiable rows. Those facts do not establish that every non-key attribute depends on every whole candidate key, so 2NF is not guaranteed. They also do not rule out transitive dependencies, as 3NF requires in the introductory model. Fifth Normal Form addresses join dependencies and cannot be inferred here. A table in a higher normal form also satisfies 1NF, but the question asks for the minimum level demonstrated, not its possible maximum level."
    },
    {
      "id": "db-041",
      "chapter": "proiectare",
      "type": "single",
      "question": "A table is in 1NF. Every non-prime attribute depends on each whole candidate key, with no partial dependency on part of a composite key. Which additional normal form is guaranteed, without assuming absence of transitive dependencies?",
      "options": [
        "4 NF",
        "2 NF",
        "1 NF",
        "3 NF"
      ],
      "correct": 1,
      "explanation": "Second Normal Form is guaranteed. Starting with 1NF, the absence of partial dependencies on a proper subset of a candidate key satisfies the additional 2NF requirement for non-prime attributes. The statement expressly does not eliminate transitive dependencies, so it does not establish 3NF. Fourth Normal Form imposes further conditions involving multivalued dependencies and is not justified either. Although the table remains in 1NF, selecting 1NF ignores the additional information about dependence on whole candidate keys."
    },
    {
      "id": "db-042",
      "chapter": "proiectare",
      "type": "single",
      "question": "Linda, a Database Designer at Lion Inc., is designing an Author table with a composite key (AuthorID and TitleID) and attributes Royalty and LiteraryAgent. The functional dependencies are such that AuthorID + TitleID-> Royalty (i.e. Royalty is functionally dependent on AuthorID and TitleID) and AuthorID->LiteraryAgent (i.e. LiteraryAgent is functionally dependent on AuthorID). Based on the functional dependencies, which statement about the table is correct?",
      "code": "Functional dependency summary\nAttribute     | Depends on\n--------------+-------------------\nRoyalty       | AuthorID + TitleID\nLiteraryAgent | AuthorID",
      "options": [
        "It violates 4 NF.",
        "It violates 2 NF.",
        "It violates 1 NF.",
        "There is no violation."
      ],
      "correct": 1,
      "explanation": "The table violates 2NF because LiteraryAgent depends on AuthorID alone, which is only part of the composite key (AuthorID, TitleID). Royalty depends on the whole pair and does not cause this partial-dependency problem. Separate author-level data from title/author royalty data so that an author's agent is not unnecessarily repeated for every title. Nothing here establishes a 1NF violation such as non-atomic values. While failure of a lower normal form prevents satisfying higher forms, 2NF identifies the specific dependency defect that the question demonstrates."
    },
    {
      "id": "db-043",
      "chapter": "proiectare",
      "type": "single",
      "question": "A table contains a primary key and several non-key attributes. You want every non-key attribute to depend on the key and not on another non-key attribute. Which normal form addresses this requirement?",
      "options": [
        "1NF",
        "2NF",
        "3NF",
        "4NF"
      ],
      "correct": 2,
      "explanation": "Third Normal Form addresses the requirement that a non-key attribute depend on a key rather than transitively through another non-key attribute. For example, storing a winner's birthdate with every event repeats a fact determined by the winner instead of the event identifier. First Normal Form addresses atomic values and repeating groups. Second Normal Form eliminates partial dependencies on parts of composite candidate keys, which is different from the non-key-to-non-key dependency described here. Fourth Normal Form concerns multivalued dependencies beyond this requirement."
    },
    {
      "id": "db-044",
      "chapter": "proiectare",
      "type": "single",
      "question": "Consider the displayed recipe relation with attributes ID, RecipeName, PrimaryIngredient and Category. For this exercise, use these declared business rules: all values are atomic; ID is the only candidate key; and every nontrivial functional dependency is implied by ID → RecipeName, PrimaryIngredient, Category. In particular, neither PrimaryIngredient nor Category determines another non-key attribute. What is the minimum number of tables required for a Third Normal Form (3NF) design that stores these facts?",
      "image": "assets/databasesimg/q092_1.jpeg",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 0,
      "explanation": "One table is sufficient under the explicitly declared rules. Atomic values establish 1NF. The single-column candidate key has no proper nonempty subset causing a partial dependency, so 2NF holds. Every nontrivial dependency has the key ID as its determinant, so the relation also meets 3NF without decomposition. Repeated ingredients or categories do not alone violate a normal form; Bacon appearing with both Entree and Snack does not establish an ingredient-to-category dependency. Two, three or four tables could be editorial lookup designs, but they are not the minimum required by these stated dependencies."
    },
    {
      "id": "db-045",
      "chapter": "proiectare",
      "type": "single",
      "question": "You create the following table, which displays winners of past pet shows. Pet Competition Winners Which column prevents the table from being in third normal form?",
      "image": "assets/databases/pdf-082-pet-winners.png",
      "options": [
        "PetID",
        "Birthdate",
        "ID",
        "Year"
      ],
      "correct": 1,
      "explanation": "Birthdate describes the pet identified by PetID, not the competition result identified by ID. Under the natural entity dependency PetID → Birthdate, storing it in the winners table introduces ID → PetID → Birthdate, a transitive dependency through a non-key attribute. Move pet details to a Pet table and retain PetID as the reference from each winning result. ID is the row identifier, while Year describes the event occurrence. PetID is needed to identify the winning pet; removing that reference would not preserve the intended association.",
      "imageAlt": "pet winners"
    },
    {
      "id": "db-046",
      "chapter": "proiectare",
      "type": "single",
      "question": "Denormalization is performed in order to:",
      "options": [
        "Reduce redundancy.",
        "Eliminate repeating groups.",
        "Create smaller tables.",
        "Improve query performance."
      ],
      "correct": 3,
      "explanation": "Denormalization deliberately introduces selected redundancy or combines data to improve query performance, typically by reducing repeated joins or precomputing read-oriented structures. The benefit is workload-dependent and comes with extra storage and consistency-maintenance costs. Reducing redundancy and eliminating repeating groups are goals of normalization, not denormalization. Creating smaller tables is also not its defining purpose; denormalization often produces wider tables instead. It should be a measured performance decision rather than a blanket claim that fewer normalized tables always make every operation faster."
    },
    {
      "id": "db-047",
      "chapter": "proiectare",
      "type": "single",
      "question": "You intentionally combine data from several normalized tables into a structure that contains some redundancy in order to improve read performance. What is this process called?",
      "options": [
        "denormalization",
        "normalization",
        "truncation",
        "index deletion"
      ],
      "correct": 0,
      "explanation": "The process is denormalization because it intentionally combines normalized data and accepts redundancy to improve reads. The direction matters: normalization separates facts according to their dependencies to reduce anomalies, while this scenario deliberately reverses some of that separation for performance. Truncation removes all rows from a table while retaining its definition. Index deletion removes an access structure and may affect performance, but it does not describe combining logical data from several tables. Denormalized copies also need a reliable way to stay consistent with their source facts."
    },
    {
      "id": "db-048",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which SQL Server statement creates a composite primary key that makes each OrderID/OrderItemID pair unique?",
      "options": [
        "CREATE TABLE OrderItems (OrderID INT NOT NULL, OrderItemID INT NOT NULL, PRIMARY KEY (OrderID, OrderItemID));",
        "CREATE TABLE OrderItems (OrderID INT UNIQUE, OrderItemID INT UNIQUE);",
        "CREATE TABLE OrderItems (OrderID INT PRIMARY KEY, OrderItemID INT PRIMARY KEY);",
        "CREATE TABLE OrderItems (OrderID INT, OrderItemID INT);"
      ],
      "correct": 0,
      "explanation": "Use the definition with one table-level PRIMARY KEY (OrderID, OrderItemID). This enforces uniqueness of each pair and forbids NULL in either primary-key component. Separate UNIQUE constraints would require each column to be unique independently, preventing ordinary orders from having several items or item identifiers from recurring across orders. Defining two separate PRIMARY KEY constraints is invalid because a table has only one primary key, although that key may be composite. Defining the columns without a constraint does not enforce pairwise uniqueness at all."
    },
    {
      "id": "db-049",
      "chapter": "proiectare",
      "type": "single",
      "question": "You need to establish a set of permissions that you can routinely assign to new users. What should you create?",
      "options": [
        "role",
        "view",
        "index",
        "backup"
      ],
      "correct": 0,
      "explanation": "Create a role and grant the required permissions to that role. New users can then become members rather than receiving the same individual grants repeatedly. This makes administration and permission changes more consistent. A view can expose a selected portion of data, but it is not a reusable group of user permissions. An index affects data access paths, not authorization membership. A backup supports recovery and does not define which operations newly created users may perform."
    },
    {
      "id": "db-050",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "The user is a member of the public and sysadmin server roles. Complete each statement.",
      "image": "assets/databasesimg/q190_1.jpeg",
      "dragItems": [
        {
          "id": "a",
          "text": "no"
        },
        {
          "id": "b",
          "text": "unlimited"
        },
        {
          "id": "c",
          "text": "read-only"
        },
        {
          "id": "d",
          "text": "configuration"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The user can perform ______ actions on data on the server.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "The user can perform ______ actions on database objects on the server.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Unlimited applies to both data actions and database-object actions because the image shows sysadmin membership. In SQL Server, members of the fixed sysadmin server role can perform any server activity and are not restricted to read-only or configuration-only operations. Membership in public does not reduce those privileges. The choices no and read-only therefore understate the user's authority. This is a server-wide administrative role, not merely a database-level data-reader role, so its effect covers both the data and the objects holding that data."
    },
    {
      "id": "db-051",
      "chapter": "proiectare",
      "type": "single",
      "question": "What role gives full access to an individual database?",
      "options": [
        "db_owner",
        "db_accessadmin",
        "db_securityadmin",
        "db_ddladmin"
      ],
      "correct": 0,
      "explanation": "db_owner is the fixed database role with broad control within an individual database. It can perform database configuration and maintenance activities and is not limited to reading or changing rows. db_accessadmin manages adding or removing database access. db_securityadmin manages role membership and permissions in its scope. db_ddladmin can run DDL commands but is not equivalent to full database ownership. These are database roles; sysadmin, which would have wider server-level authority, is not one of the offered choices."
    },
    {
      "id": "db-052",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which SQL Server fixed database role grants SELECT access to all user tables and views, without itself granting write access?",
      "options": [
        "db_datawriter",
        "db_owner",
        "db_securityadmin",
        "db_datareader"
      ],
      "correct": 3,
      "explanation": "db_datareader grants SELECT access to all user tables and views in its database without itself granting INSERT, UPDATE or DELETE. db_datawriter grants data-changing permissions rather than the requested read access. db_owner supplies much broader control and therefore does not match a read-only role requirement. db_securityadmin concerns permissions and security administration rather than automatically granting the stated query access. A user's effective permissions can also come from other memberships or grants, so this question describes what the named role itself contributes."
    },
    {
      "id": "db-053",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which command creates a database user principal?",
      "options": [
        "ALLOW USER",
        "CREATE USER",
        "ADD USER",
        "INSERT USER",
        "ALTER USER"
      ],
      "correct": 1,
      "explanation": "CREATE USER creates a database user principal. In SQL Server it may map to a login or use another supported authentication arrangement, depending on the full statement. ALTER USER changes an existing user rather than creating a new one. ALLOW USER, ADD USER and INSERT USER are not the standard creation statements offered by SQL Server. Inserting a row into an application-owned users table is a different operation and does not by itself establish a database security principal."
    },
    {
      "id": "db-054",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which command is used to give a user permission to access a database object?",
      "options": [
        "GRANT",
        "DENY",
        "PERMIT",
        "ALTER"
      ],
      "correct": 0,
      "explanation": "GRANT assigns a permission to a principal, for example GRANT SELECT ON dbo.Customer TO User1. DENY explicitly blocks a permission rather than granting it. ALTER changes an existing database object's definition or configuration and is not the general permission-assignment statement. PERMIT is not the T-SQL command for this task. A valid grant still needs the relevant permission, securable and recipient, and the grantor must have authority to grant it; the keyword is not a way to bypass security."
    },
    {
      "id": "db-055",
      "chapter": "proiectare",
      "type": "single",
      "question": "Evaluate the following statement. Use the ALLOW SELECT command to give a user permission to read the data in a table. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "GRANT SELECT",
        "LET HEAD",
        "PERMIT READ"
      ],
      "correct": 1,
      "explanation": "Replace ALLOW SELECT with GRANT SELECT. A complete permission statement could be GRANT SELECT ON dbo.TableName TO User1, allowing that principal to read the specified object. No change is needed would leave the nonexistent ALLOW SELECT command in place. LET HEAD and PERMIT READ are not valid SQL Server permission syntax. SELECT identifies the reading permission here, whereas GRANT is the action that assigns that permission; both are needed in their correct positions."
    },
    {
      "id": "db-056",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Choose the correct GRANT syntax for each requirement.",
      "dragItems": [
        {
          "id": "a",
          "text": "GRANT EXECUTE ON sp_current_sales TO inside_sales WITH GRANT OPTION"
        },
        {
          "id": "b",
          "text": "GRANT EXECUTE ON sp_current_sales TO inside_sales"
        },
        {
          "id": "c",
          "text": "GRANT SELECT ON vw_sales_today TO ROLE sales_manager WITH GRANT OPTION"
        },
        {
          "id": "d",
          "text": "GRANT EXECUTE ON sp_current_sales TO GROUP inside_sales"
        },
        {
          "id": "e",
          "text": "GRANT SELECT ON vw_sales_today TO sales_manager WITH GRANT OPTION"
        },
        {
          "id": "f",
          "text": "GRANT OPTION SELECT ON vw_sales_today TO sales_manager"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Allow inside_sales to execute sp_current_sales.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Allow sales_manager to SELECT from vw_sales_today and delegate that permission.",
          "correctItemId": "e"
        }
      ],
      "explanation": "Use GRANT EXECUTE ON sp_current_sales TO inside_sales for the first requirement. It gives execution permission without unnecessarily delegating it. Use GRANT SELECT ON vw_sales_today TO sales_manager WITH GRANT OPTION for the second requirement because the manager must both read and delegate that reading permission. SQL Server names the receiving principal directly after TO; TO ROLE and TO GROUP are not the syntax shown here. GRANT OPTION is an ending clause, not a prefix before SELECT. The EXECUTE version with delegation is broader than the first request needs."
    },
    {
      "id": "db-057",
      "chapter": "proiectare",
      "type": "single",
      "question": "You assign User1 a set of permissions that include the WITH GRANT OPTION. The WITH GRANT OPTION enables User1 to:",
      "options": [
        "request a log of permission use.",
        "delegate permissions to other users.",
        "create new database users.",
        "view other users' permissions."
      ],
      "correct": 1,
      "explanation": "WITH GRANT OPTION allows User1 to grant the granted permission to other principals. It extends the user's authority to delegate that permission; it does not automatically permit all security-administration operations. It does not create new database users, request an audit log, or provide a general facility for viewing everyone else's permissions. For example, a SELECT grant with this option enables delegation of SELECT on the same securable, not arbitrary ALTER or DELETE rights."
    },
    {
      "id": "db-058",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the purpose of the DENY permission in SQL Server?",
      "options": [
        "It deletes the user",
        "It temporarily disables a user",
        "It explicitly blocks a permission",
        "It allows SELECT but denies INSERT"
      ],
      "correct": 2,
      "explanation": "DENY explicitly blocks the named permission for a principal. It is a permission decision, not a user-deletion statement or a command that temporarily disables an account. It also does not inherently mean SELECT is allowed while INSERT is denied: the permission named in the actual DENY determines which operation is blocked. Ordinary permission resolution considers grants, denials and memberships, with documented SQL Server exceptions for privileged contexts and some permission hierarchies. The purpose is explicit refusal, not general account management."
    },
    {
      "id": "db-059",
      "chapter": "proiectare",
      "type": "single",
      "question": "User1 was directly granted SELECT permission on the Customer table. Which statement removes that direct grant?",
      "options": [
        "REMOVE User1 FROM Customer",
        "REMOVE SELECT ON Customer FROM User1",
        "REVOKE SELECT ON Customer FROM User1",
        "REVOKE User1 FROM Customer"
      ],
      "correct": 2,
      "explanation": "REVOKE SELECT ON Customer FROM User1 removes the direct SELECT grant described in the question. REVOKE is the permission-removal action, and SELECT, the object and the recipient identify exactly what is being removed. The REMOVE forms are not valid T-SQL permission syntax, while REVOKE User1 FROM Customer omits the permission. Removing a direct grant does not necessarily eliminate effective read access if another role or grant still supplies it; an explicit DENY is a different operation with different consequences."
    },
    {
      "id": "db-060",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the main purpose of performing regular database backups?",
      "options": [
        "To increase query performance",
        "To prevent loss of critical information",
        "To allow users to edit data faster",
        "To reset permissions automatically"
      ],
      "correct": 1,
      "explanation": "Regular backups preserve recoverable copies of important data so that failures, corruption or accidental changes do not necessarily cause permanent information loss. They do not prevent every incident, and recovery depends on usable backups, retention and tested restore procedures. Their main purpose is not to make queries faster or allow faster editing. Backups also do not reset user permissions automatically. Performance tuning and permission administration are separate concerns even though the backup includes database structures and security-related information needed for recovery."
    },
    {
      "id": "db-061",
      "chapter": "proiectare",
      "type": "single",
      "question": "In which situation do you need to perform a restore on a database?",
      "options": [
        "when data becomes corrupted in the database",
        "when you need to roll back a transaction",
        "when you encounter an error in your application",
        "when data needs to be deleted from the database"
      ],
      "correct": 0,
      "explanation": "Corruption is the situation that most directly calls for restoring a usable backup to recover the database. A transaction that is still active can normally be undone with ROLLBACK rather than replacing the database from backup. An application error does not automatically mean stored data is damaged or that a restore is appropriate. Intentionally deleting data uses DML such as DELETE. Restoring can discard later work if the recovery chain does not include it, so recovery planning matters in addition to recognizing the corruption scenario."
    },
    {
      "id": "db-062",
      "chapter": "proiectare",
      "type": "single",
      "question": "In a backup system that supports incremental backups, a full backup already exists. Only a small fraction of a 10 TB database changes every two hours. Which listed backup type saves changes since the previous backup, avoiding repeated full copies?",
      "options": [
        "archive",
        "incremental",
        "partial",
        "full"
      ],
      "correct": 1,
      "explanation": "Incremental is the defined backup type that saves changes since the preceding backup in a backup system supporting that model. With only a small fraction of 10 TB changing, it avoids repeatedly copying all data. Full would copy the whole database again, and archive and partial do not state the required change-since-previous behavior. This is a generic backup-system question: SQL Server normally describes full, differential and transaction-log backups rather than a native database-backup type literally named INCREMENTAL. Do not substitute SQL Server log terminology for the explicitly stated generic model."
    },
    {
      "id": "db-063",
      "chapter": "proiectare",
      "type": "single",
      "question": "At 3:00 P.M. (15:00 hours), you create a backup of your database. At 4:00 P.M. (16:00 hours), you create a table named Customer and import data into the table. At 5:00 P.M. (17:00 hours), your server fails. You run a script to apply only the 3:00 P.M. backup to your database. What is the result of the script? Assume you restore only the 15:00 backup; no later differential or log backups are applied.",
      "options": [
        "The Customer table no longer exists.",
        "The Customer table is unaffected.",
        "The Customer table exists but has no data.",
        "The script fails."
      ],
      "correct": 0,
      "explanation": "The Customer table no longer exists in the restored database because it was created at 16:00, after the 15:00 backup. Restoring only that earlier backup returns the database to the state represented there; it does not retain later schema changes while merely clearing their data. Therefore neither unaffected nor exists but empty describes the result. There is no stated reason the restore must fail. Later differential or log backups could change the outcome, but the stem expressly excludes applying any of them."
    },
    {
      "id": "db-064",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement correctly describes a Full Backup?",
      "options": [
        "It only backs up data that has changed since the last backup.",
        "It performs a complete copy of the entire database, including all data and structures.",
        "It backs up the transaction log changes only.",
        "It saves the most recent changes made in a specific time window."
      ],
      "correct": 1,
      "explanation": "A full backup contains the database data and structures needed for a complete backup of the database, along with sufficient log information for consistency in SQL Server. It is not merely a copy of changes since a previous backup. A transaction-log backup captures log records rather than the complete database data set. A particular time-window change capture is also not the defining property of a full backup. The term full describes its coverage, not a guarantee that it always copies every unused byte of the physical files."
    },
    {
      "id": "db-065",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which of the following best describes a Differential Backup?",
      "options": [
        "It backs up all data and structures, creating a complete copy of the database.",
        "It only backs up changes made since the last incremental backup.",
        "It backs up changes made since the last full backup.",
        "It only backs up the transaction log changes."
      ],
      "correct": 2,
      "explanation": "A differential backup captures changes since its differential base, normally the most recent applicable full backup. It is cumulative relative to that base, so several differential backups after the same full backup can include overlapping changes. Changes since the last incremental backup describe a different model, and a log-only backup contains transaction-log records rather than changed database extents. Copying all data and structures describes a full backup. Recovery normally uses the full base plus the selected differential, not every intermediate differential in sequence."
    },
    {
      "id": "db-066",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which of the following best describes an Incremental Backup?",
      "options": [
        "It backs up data that was modified since the last full or incremental backup.",
        "It backs up all data modified since the last differential backup.",
        "It backs up changes since the last transaction log backup.",
        "It always performs a complete copy of the database."
      ],
      "correct": 0,
      "explanation": "An incremental backup, in the generic backup model used here, saves data changed since the preceding full or incremental backup. That differs from a differential backup, which accumulates changes since its full base. It is not automatically identical to a SQL Server transaction-log backup: those store log records under the supported recovery model. Nor does an incremental backup always copy the whole database. Restoring a chain of incrementals generally requires the appropriate full backup and all necessary intervening incremental backups."
    },
    {
      "id": "db-067",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the purpose of a transaction log backup in SQL Server?",
      "options": [
        "To reset the database to factory settings",
        "To back up only system tables",
        "To capture all transactions since the last log backup",
        "To compress full backups into smaller files"
      ],
      "correct": 2,
      "explanation": "A SQL Server transaction-log backup captures log records since the preceding log backup boundary, preserving the sequence needed for log-based recovery. It supports recovery through the log chain under Full or Bulk-logged recovery, subject to their rules. It does not reset the database to an initial state, back up only system tables, or compress earlier full-backup files. Taking a log backup is also not a substitute for maintaining a suitable full backup base and a usable, unbroken recovery chain."
    },
    {
      "id": "db-068",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Instructions: For each of the following statements, select Yes if the statement is true. Otherwise, select No. Each correct selection is worth one point. Description of Behavior:",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A full database backup is a copy of all of the data in the entire database.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "A transaction log backup backs up all the data in the database.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "A differential backup copies only data that was changed before the last full backup.",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "A file or filegroup restore specifies a portion of the database to recover.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Yes / No / No / Yes. A full database backup covers the database's data. A log backup instead captures transaction-log records and is not another full copy of all table data. A differential backup contains changes since its full differential base, not data changed before that backup. A file or filegroup restore targets a specified portion of the database, although bringing that portion to a consistent recoverable state may also require log application and other recovery steps. These backup and restore types differ in coverage, not merely in their names."
    },
    {
      "id": "db-069",
      "chapter": "proiectare",
      "type": "drag_drop",
      "question": "Compare SQL Server Simple recovery with Full recovery when both have the same data-backup schedule and Full also has frequent successful transaction-log backups.",
      "image": "assets/databasesimg/q210_1.jpeg",
      "dragItems": [
        {
          "id": "a",
          "text": "less"
        },
        {
          "id": "b",
          "text": "the same"
        },
        {
          "id": "c",
          "text": "more"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Simple recovery provides ______ work-loss exposure than full recovery.",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "Simple recovery provides ______ log file backups than full recovery.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Simple recovery has more work-loss exposure and less log-file backing up under the explicit comparison. Simple recovery does not support transaction-log backups, so recovery is limited to available data backups. Full recovery with successful frequent log backups can recover changes more recent than the same data-backup schedule alone would allow. The same would ignore that extra protection, while less work-loss exposure reverses it. Full recovery by itself is not a promise of no loss: the comparison depends on actually taking and retaining the log backups stated in the stem."
    },
    {
      "id": "db-070",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which database term describes applying a backup to recover a damaged or corrupt database?",
      "options": [
        "Truncate",
        "Commit",
        "Attach",
        "Restore"
      ],
      "correct": 3,
      "explanation": "Restore is the operation that applies backup data to recover a database. TRUNCATE removes table rows and would not reconstruct lost information. COMMIT completes a transaction and makes its changes durable; it does not load a recovery copy. ATTACH registers existing database files with SQL Server and is distinct from restoring a backup set. A successful recovery may require more than one restore operation, such as a full backup followed by a differential and logs, but restore is still the correct database term."
    },
    {
      "id": "db-071",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Choose the correct SQL Server statements for a full backup and restore of the sales database.",
      "dragItems": [
        {
          "id": "a",
          "text": "BACKUP DATABASE sales TO 'E:\\backups\\sales.bak'"
        },
        {
          "id": "b",
          "text": "BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak'"
        },
        {
          "id": "c",
          "text": "CREATE RESTORE sales FROM 'E:\\backups\\sales.bak'"
        },
        {
          "id": "d",
          "text": "RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'"
        },
        {
          "id": "e",
          "text": "RESTORE DATABASE sales FROM 'E:\\backups\\sales.bak'"
        },
        {
          "id": "f",
          "text": "CREATE BACKUP TO DISK = 'E:\\backups\\sales.bak' FROM SALES"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Backup statement",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Restore statement",
          "correctItemId": "d"
        }
      ],
      "explanation": "Choose BACKUP DATABASE sales TO DISK = 'E:\\backups\\sales.bak' and RESTORE DATABASE sales FROM DISK = 'E:\\backups\\sales.bak'. SQL Server uses DATABASE to identify this kind of backup or restore and DISK = to specify a filesystem destination or source. A quoted path placed directly after TO or FROM is not the required file-device syntax in these choices. CREATE BACKUP and CREATE RESTORE are not the T-SQL commands. Real execution also requires appropriate permissions and an accessible server-side path."
    },
    {
      "id": "db-072",
      "chapter": "proiectare",
      "type": "single",
      "question": "The main data files used on a Microsoft SQL server have an extension ___________",
      "options": [
        ".ldf",
        ".ndf",
        ".mdf",
        ".bak"
      ],
      "correct": 2,
      "explanation": ".mdf is the conventional extension for the primary SQL Server data file. Secondary data files conventionally use .ndf, and transaction-log files use .ldf. A .bak file commonly contains a backup set rather than serving as the active primary database data file. The question asks about the main data file, not every file associated with a database. These are standard naming conventions; SQL Server's internal file role is not determined solely by the characters used in a filename extension."
    },
    {
      "id": "db-073",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which of the following, is the filename extension of Microsoft SQL Server transaction log?",
      "options": [
        ".mdf",
        ".ldf",
        ".ndf",
        ".log"
      ],
      "correct": 1,
      "explanation": ".ldf is the standard SQL Server transaction-log filename extension. The log records changes needed for transaction recovery and, under the appropriate recovery model, log backups. .mdf conventionally identifies the primary data file, while .ndf identifies secondary data files. .log is a general-purpose filename suffix but is not the conventional SQL Server database transaction-log answer requested here. A database's log is not simply another user table or a full backup copy of the data files."
    },
    {
      "id": "db-074",
      "chapter": "proiectare",
      "type": "single",
      "question": "You delete rows in a table named Order. The corresponding rows in the OrderItem table are automatically deleted. This process is an example of a/an:",
      "options": [
        "Inherited delete",
        "Cascade delete",
        "Functional delete",
        "Waterfall delete",
        "Domino delete"
      ],
      "correct": 1,
      "explanation": "This is cascade delete: an ON DELETE CASCADE foreign-key action removes dependent OrderItem rows when their referenced Order row is deleted. The direction follows the parent-to-child dependency. Inherited, functional, waterfall and domino delete are not the SQL referential-action names. Without the cascade action, an enforced foreign key would normally block deleting a referenced parent until its children are handled. The automatic deletion here is therefore a declared relationship behavior, not a consequence of merely naming two tables similarly."
    },
    {
      "id": "db-075",
      "chapter": "proiectare",
      "type": "single",
      "question": "You work for a small auto trading company. You need to remove a car from the company database. Information about the car is stored in the following tables. All of the car's parts are custom made, so they each have a row in every table. Cascading deletes are not enabled but referential integrity is. From which table must you first make your deletion?",
      "image": "assets/databasesimg/q217_1.jpeg",
      "options": [
        "Make",
        "Model",
        "Engine",
        "ModelEngine"
      ],
      "correct": 3,
      "explanation": "Delete the ModelEngine rows first. The diagram places this junction table on the child side of relationships to both Model and Engine, and Model itself references Make. With referential integrity enforced and no cascading delete, deleting referenced parent rows while dependent rows remain can fail. After the affected ModelEngine rows are removed, the relevant Model and Engine rows can be considered in a valid dependency order, followed by Make when appropriate. Starting with Make, Model or Engine would leave references from rows that still exist."
    },
    {
      "id": "db-076",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which TWO measures directly help protect sensitive patient data from unauthorized access? (Choose two.)",
      "options": [
        "Auditing and monitoring",
        "Strong data encryption",
        "Role-based access control",
        "De-identification only"
      ],
      "correct": [
        1,
        2
      ],
      "explanation": "Choose strong data encryption and role-based access control. Encryption protects the intelligibility of stored or transmitted sensitive data when the keys are appropriately protected. Role-based access control restricts which users can perform permitted operations. Auditing and monitoring are valuable for accountability and detection, but do not directly prevent access in the way these two controls do. De-identification reduces exposure in appropriate data sets, yet de-identification only is not a complete access-control strategy for an operational patient database. The measures should work together rather than replacing one another."
    },
    {
      "id": "db-077",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which SQL Server feature transparently encrypts the entire database data and log files at rest?",
      "options": [
        "Transparent data encryption",
        "Column-level encryption",
        "Trusted Platform Module",
        "Application-level encryption"
      ],
      "correct": 0,
      "explanation": "Transparent Data Encryption is the choice for transparently encrypting whole database files at rest. It protects the data and log files through the database encryption hierarchy while allowing applications to continue issuing ordinary queries. Column-level and application-level encryption can also protect stored values, but they target selected values and involve different key or application designs; they are not the whole-file transparent mechanism specified by the clarified stem. A Trusted Platform Module is a hardware security component, not itself the SQL Server database-file encryption feature."
    },
    {
      "id": "db-078",
      "chapter": "proiectare",
      "type": "single",
      "question": "What does TDE (Transparent Data Encryption) protect?",
      "options": [
        "Network traffic",
        "Database files/backups at rest",
        "Passwords in a table",
        "User permissions"
      ],
      "correct": 1,
      "explanation": "TDE protects database files and associated backups at rest. It is designed to reduce exposure if someone obtains the physical files without the required decryption material. It does not encrypt client/server network traffic; transport encryption is a separate control. It also does not specifically hash passwords or replace user permissions. Authorized queries still receive usable values through the database engine, so TDE should not be described as preventing every logged-in database user from reading sensitive columns."
    },
    {
      "id": "db-079",
      "chapter": "proiectare",
      "type": "single",
      "question": "Your organization hosts a web site with a back-end database. The database stores customer data, including credit card numbers. Which of the following is the BEST way to protect the credit card data?",
      "options": [
        "Full database encryption",
        "Whole disk encryption",
        "Database column encryption",
        "File-level encryption"
      ],
      "correct": 2,
      "explanation": "Database column encryption is the best listed match for protecting a particular sensitive field such as a credit card number. It can apply encryption and key access specifically to that value rather than relying only on broad storage protection. Full-database, disk and file encryption primarily protect stolen storage or backup media; an authorized database query may still see plaintext. Column encryption is not automatically sufficient by itself: the key location, access policy, application handling and avoidance of unnecessary card-data retention determine the actual security achieved."
    },
    {
      "id": "db-080",
      "chapter": "proiectare",
      "type": "single",
      "question": "For classic SQL Server Always Encrypted without secure enclaves, with column keys held outside the server, what is the effect of encrypting the IDNP column?",
      "options": [
        "The server can sort by the ID in plaintext",
        "The server never sees plaintext; some operations are limited",
        "Tables become read-only",
        "Keys are no longer needed"
      ],
      "correct": 1,
      "explanation": "The server does not see plaintext in the specified classic Always Encrypted arrangement, and some operations are limited. The client driver handles encryption and decryption with column keys held outside the server. The server therefore cannot freely sort or perform arbitrary calculations over the original identifier values. The table does not become read-only: supported operations can still insert, update and retrieve encrypted values. Keys remain essential. Deterministic and randomized encryption allow different operations, but neither makes plaintext freely available to the server under this stated no-enclave model."
    },
    {
      "id": "db-081",
      "chapter": "proiectare",
      "type": "single",
      "question": "You want to encrypt database files at rest with minimal changes to application queries. Which approach best matches this requirement?",
      "options": [
        "Column-level encryption",
        "File-level / transparent database encryption",
        "Table-level encryption",
        "Record-level encryption"
      ],
      "correct": 1,
      "explanation": "File-level / transparent database encryption best matches encrypting database files at rest with minimal application-query changes. The engine reads and writes the protected files transparently for normal authorized queries. Column-level encryption targets selected values and often affects key handling and available operations. Table-level and record-level encryption are not the standard SQL Server transparent database-file mechanism being asked for. Protection at rest does not automatically protect network traffic or prevent a user with ordinary query permission from seeing values after the engine decrypts them."
    },
    {
      "id": "db-082",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which technique is suitable for storing passwords?",
      "options": [
        "TDE",
        "Salted hashing",
        "Masking",
        "Backup Encryption"
      ],
      "correct": 1,
      "explanation": "Use salted password hashing with a purpose-built, deliberately expensive password-hashing algorithm such as Argon2id, scrypt, bcrypt or an appropriately configured PBKDF2. A different salt per password defeats reuse of precomputed hashes across accounts; the salt need not be secret. TDE and backup encryption protect storage media but do not replace safe password verification. Masking changes displayed values and is not password storage protection. Plain fast hashing alone is also insufficient against guessing attacks, so the algorithm and work factor matter as well as the salt."
    },
    {
      "id": "db-083",
      "chapter": "proiectare",
      "type": "single",
      "question": "An attacker retrieves hashed passwords from a breached database and uses a precomputed set of hash values to crack the original passwords. Which type of attack is it?",
      "options": [
        "Brute force attack",
        "Dictionary attack",
        "Spraying attack",
        "Rainbow attack"
      ],
      "correct": 3,
      "explanation": "This is a rainbow-table attack, represented by Rainbow attack. It uses precomputed information to reverse or recognize password hashes instead of calculating every candidate from scratch for each stolen hash. A dictionary attack tries candidate passwords from a word list, and brute force systematically searches a password space. Password spraying tries a small number of common passwords across many accounts. Unique salts make reusable precomputation ineffective across accounts, although weak passwords can still be guessed with a per-account attack."
    },
    {
      "id": "db-084",
      "chapter": "proiectare",
      "type": "single",
      "question": "What does Dynamic Data Masking do?",
      "options": [
        "Encrypts the column on disk",
        "Hides values at display time for certain users",
        "Computes an HMAC",
        "Restores passwords"
      ],
      "correct": 1,
      "explanation": "Dynamic Data Masking changes how sensitive values are returned to users without sufficient unmasking privileges. It does not encrypt the stored column bytes, calculate an HMAC or recover passwords. Authorized or privileged users may still retrieve the original data. Masking is a display and exposure-reduction feature, not a complete substitute for access control, encryption or protection against inference through queries. The correct choice describes what ordinary restricted users see, rather than claiming the original values have been removed from storage."
    },
    {
      "id": "db-085",
      "chapter": "proiectare",
      "type": "single",
      "question": "What measures can be taken to protect sensitive data from unauthorized access in data security?",
      "options": [
        "Data masking and anonymization",
        "Data aggregation",
        "Data retention",
        "Data classification"
      ],
      "correct": 0,
      "explanation": "Data masking and anonymization directly reduce exposure of sensitive values in the situations for which they are correctly applied. Masking hides or transforms displayed values, while proper anonymization aims to remove the ability to identify individuals. Aggregation may reduce detail but does not automatically prevent disclosure or re-identification. Retention specifies how long data is kept, and classification labels its sensitivity; both guide security decisions but do not themselves hide the underlying values. These techniques should complement permissions and other controls, not be treated as universal access barriers."
    },
    {
      "id": "db-086",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is the purpose of database auditing?",
      "options": [
        "To encrypt sensitive data",
        "To track and record database activities for security and compliance",
        "To enhance user experience",
        "To optimize query performance"
      ],
      "correct": 1,
      "explanation": "Database auditing records relevant activities so administrators can investigate use, demonstrate accountability and support compliance. Typical events include logins, data changes, object changes and permission-related actions, depending on the configured audit scope. It does not encrypt sensitive values or automatically make queries faster. Enhancing the user interface is unrelated to its main purpose. Audit coverage, secure retention and review of the records matter: simply enabling an audit feature does not guarantee that every event of interest is captured or that suspicious activity is prevented."
    },
    {
      "id": "db-087",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which activity is typically monitored by network-security tools rather than by the database audit log itself?",
      "options": [
        "Database object changes",
        "Network traffic",
        "Data changes",
        "User access and authentication"
      ],
      "correct": 1,
      "explanation": "Network traffic is normally inspected by network-security tools, packet capture or network monitoring rather than being fully recorded by the database audit log itself. Database auditing can record configured object changes, data-changing operations, access and authentication events. An audit may include connection-related context, but that is not equivalent to recording or inspecting all traffic on the network. The distinction is between activity inside the database service and the packets and connections observed at the network layer."
    },
    {
      "id": "db-088",
      "chapter": "proiectare",
      "type": "single",
      "question": "A database has an audit log to track user activities such as login attempts, data modifications, and schema changes. This log helps identify unauthorized or suspicious behavior. What is the primary purpose of enabling database auditing?",
      "options": [
        "Improve performance",
        "Ensure data normalization",
        "Enhance accountability and security",
        "Automate transaction management"
      ],
      "correct": 2,
      "explanation": "The primary purpose is accountability and security: the log associates operations such as logins, modifications and schema changes with the relevant actors and times. That record supports investigation of suspicious behavior and compliance reviews. It does not normalize the schema or automatically manage transaction boundaries. Performance improvement is also not its defining benefit; audit collection can itself add overhead. The presence of a record helps detect and explain unauthorized actions but does not mean the audit alone prevents those actions from occurring."
    },
    {
      "id": "db-089",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "What are two main benefits of assigning appropriate data types instead of making every column VARCHAR? (Choose two.)",
      "options": [
        "More efficient data storage",
        "The ability to use values correctly in calculations",
        "Fewer restrictions on invalid data",
        "No need for constraints"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Choose more efficient storage and correct use in calculations. An appropriate numeric or date type represents the intended values directly, allowing arithmetic, comparison and validation without repeatedly parsing strings. Making everything VARCHAR can produce lexical rather than numeric comparisons and conversion failures. The goal is not fewer restrictions on invalid data; useful type restrictions help reject unsuitable values. Types also do not eliminate the need for primary keys, foreign keys, CHECK rules or nullability constraints. Exact storage savings depend on the chosen types and actual data, not simply on avoiding VARCHAR everywhere."
    },
    {
      "id": "db-090",
      "chapter": "proiectare",
      "type": "single",
      "question": "Users receive only the permissions required to perform their assigned tasks. Which security principle is this?",
      "options": [
        "Metadata",
        "Referential integrity",
        "Least privilege",
        "Normalization"
      ],
      "correct": 2,
      "explanation": "This is least privilege: give users only the permissions necessary for their assigned tasks and no unnecessary administrative or data access. Metadata is information about objects and data definitions, not an authorization principle. Referential integrity validates relationships between stored rows. Normalization organizes dependencies to reduce redundancy and anomalies. Neither integrity rules nor normalization determines which users should be able to read or change the data, although all these practices can contribute to a well-designed database system."
    },
    {
      "id": "db-091",
      "chapter": "proiectare",
      "type": "single",
      "question": "SQL injection is best described as:",
      "options": [
        "A technique that exploits SQL/database-layer input vulnerabilities",
        "An INSERT statement",
        "The normal execution of a stored procedure",
        "Any SQL used from a high-level language"
      ],
      "correct": 0,
      "explanation": "SQL injection exploits unsafe handling of input at the SQL/database boundary, typically when attacker-controlled text becomes executable query syntax. Parameterized queries keep supplied values separate from SQL structure and are a primary defense, alongside appropriate permissions and validation. An ordinary INSERT statement is not inherently an attack, nor is the normal execution of a stored procedure. A high-level language may safely access SQL. Stored procedures are not automatically immune if they build unsafe dynamic SQL from untrusted input."
    },
    {
      "id": "db-092",
      "chapter": "proiectare",
      "type": "single",
      "question": "What is collation in a database?",
      "options": [
        "A method for joining SQL Servers",
        "A database normalization process",
        "A way to link all data about the same real-world object",
        "A set of rules that determines how character data is sorted and compared"
      ],
      "correct": 3,
      "explanation": "Collation defines rules for comparing and sorting character data, including distinctions such as case and accent sensitivity. Depending on the DBMS and type, it can also affect character encoding behavior. It is not a method for connecting SQL Server instances or a normalization process. Linking facts about an entity concerns modeling and relationships rather than collation. These rules matter to equality tests, ORDER BY and string matching: the same visible characters may compare differently under different collations."
    },
    {
      "id": "db-093",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement about primary keys, select Yes if it is true. Otherwise, select No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A UNIQUE constraint is the same as a primary key.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "A user ID can be an example of a primary key.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Relationships between tables can be enforced with foreign key constraints.",
          "correctItemId": "a"
        }
      ],
      "explanation": "No / Yes / Yes. UNIQUE and PRIMARY KEY both enforce uniqueness, but a table can have several unique constraints and only one primary key, and the primary key forbids NULL in its components. A user ID can serve as a primary key if it is genuinely unique and non-NULL. Foreign-key constraints enforce valid references between related tables. A matching value used in an ad hoc join is not, by itself, an enforced foreign key; the constraint is what provides the integrity rule."
    },
    {
      "id": "db-094",
      "chapter": "proiectare",
      "type": "single",
      "question": "What does SQL stand for?",
      "options": [
        "Strong Question Language",
        "Structured Query Language",
        "Structured Query Log",
        "Structured Question Language"
      ],
      "correct": 1,
      "explanation": "SQL stands for Structured Query Language. It is the standard name for the language family used to define database structures, retrieve data and perform other database operations. Structured Query Log confuses the language with a log, and the choices using Question or Strong are not the expansion of this acronym. Although query is in its name, SQL includes more than SELECT: implementations also provide table definitions, data manipulation and permission statements."
    },
    {
      "id": "db-095",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which three statements about foreign keys are true? (Choose three.)",
      "options": [
        "A foreign key can use one or more columns to establish a link between two tables.",
        "A foreign key enforces referential integrity by allowing only valid referenced values.",
        "A foreign key is always the same as a primary key.",
        "A table can contain only one foreign key.",
        "A foreign key constraint can be defined when a table is created or altered."
      ],
      "correct": [
        0,
        1,
        4
      ],
      "explanation": "Choose the first, second and fifth statements. A foreign key can consist of one or several columns, enforces valid non-NULL references, and can be declared during CREATE TABLE or added through ALTER TABLE. A nullable reference may represent no parent, so the integrity statement should not be interpreted as forbidding NULL automatically. A foreign key is not always a primary key: child references commonly repeat. A table may also have several foreign keys, each describing a different relationship or a different role in the same relationship."
    },
    {
      "id": "db-096",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement correctly creates OrderDetails so that OrderID references Orders(OrderID)?",
      "options": [
        "CREATE TABLE OrderDetails (\n OrderDetailID INT NOT NULL PRIMARY KEY,\n OrderID INT,\n FOREIGN KEY (OrderID) REFERENCES Orders(OrderID)\n);",
        "CREATE TABLE OrderDetails (\n OrderDetailID INT NOT NULL PRIMARY KEY,\n OrderID INT,\n PRIMARY KEY (OrderDetailID) REFERENCES Orders(OrderID)\n);",
        "CREATE TABLE OrderDetails (\n OrderDetailID INT NOT NULL PRIMARY KEY,\n OrderID INT,\n FOREIGN KEY REFERENCES Orders(OrderID)\n);"
      ],
      "correct": 0,
      "explanation": "The first definition correctly names OrderID as the foreign-key column and specifies REFERENCES Orders(OrderID). OrderDetailID separately serves as this table's primary key. The second definition incorrectly tries to attach REFERENCES to another primary-key clause and repeats the already declared primary-key role. The third omits the referencing column list in the table-level foreign-key clause. The referenced Orders column must itself be eligible as a referenced key. Since OrderID is nullable here, the foreign key alone does not require every detail row to contain an order reference."
    },
    {
      "id": "db-097",
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two are important reasons for normalizing data? (Choose two.)",
      "options": [
        "Reduce undesirable data dependencies",
        "Reduce redundant data",
        "Reduce the number of tables in every database",
        "Always make the database physically smaller"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Normalization reduces redundant facts and undesirable dependencies that can cause insertion, update and deletion anomalies. For example, storing a person's details once avoids having to update several repeated copies consistently. It does not necessarily reduce the number of tables; decomposing relations often increases it. It also does not guarantee that the physical database is always smaller, because keys, indexes and storage overhead can change. The reasons selected here concern logical consistency, not an unconditional promise of improved size or speed."
    },
    {
      "id": "db-098",
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement best describes a table in Third Normal Form (3NF)?",
      "options": [
        "Every non-prime attribute is non-transitively dependent on every candidate key in the table.",
        "Every non-trivial join dependency is implied by the superkeys.",
        "No non-prime attribute is functionally dependent on a proper subset of a candidate key.",
        "The table has no repeating groups."
      ],
      "correct": 0,
      "explanation": "Choose the statement about every non-prime attribute being non-transitively dependent on each candidate key. In the introductory formulation, this expresses the 3NF goal of avoiding non-key facts depending on keys through other non-key facts. The proper-subset dependency choice describes 2NF, and no repeating groups describes 1NF. The join-dependency choice concerns 5NF. Formally, 3NF allows a nontrivial functional dependency when its determinant is a superkey or its dependent attribute is prime; the selected wording is the intended non-prime-attribute summary rather than a full formal definition."
    },
    {
      "id": "db-099",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL statement correctly creates a database named testDB?",
      "options": [
        "CREATE DATABASE 'testDB';",
        "CREATE testDB DATABASE;",
        "CREATE DB testDB;",
        "CREATE DATABASE testDB;"
      ],
      "correct": 3,
      "explanation": "CREATE DATABASE testDB; has the correct keyword order and an unquoted ordinary identifier. CREATE DB is not the SQL Server database-creation keyword, and CREATE testDB DATABASE reverses the object type and name. Single quotes normally delimit a character-string literal rather than the database identifier required here. SQL Server supports identifier delimiters such as brackets when needed, but none are necessary for testDB. Creating a database also requires the appropriate permissions and an environment that permits that operation."
    },
    {
      "id": "db-100",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What SQL command is used to change the context of the database?",
      "options": [
        "SELECT",
        "ALTER",
        "USE",
        "UPDATE"
      ],
      "correct": 2,
      "explanation": "USE changes the current database context for subsequent statements in a SQL Server session. SELECT retrieves data, UPDATE changes existing row values, and ALTER changes an object's definition or configuration. These commands do not replace USE for choosing the current database. This is a dialect-scoped question: support for switching database context varies by database platform and service. The selected command is the conventional SQL Server statement, for example USE testDB."
    },
    {
      "id": "db-101",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Write the correct SQL statement to delete a database named testDB.",
      "options": [
        "DELETE DATABASE testDB",
        "DROP DATABASE testDB",
        "REMOVE DATABASE testDB",
        "CLEAR DATABASE testDB"
      ],
      "correct": 1,
      "explanation": "DROP DATABASE testDB removes the named database. DELETE operates on rows, not on an entire database definition, so DELETE DATABASE is not the command. REMOVE DATABASE and CLEAR DATABASE are also not the SQL Server syntax. Dropping a database is a destructive administrative action and is distinct from deleting data in a particular table. The command must be executed from an appropriate context with the required authority and without conditions, such as conflicting use, that block the operation."
    },
    {
      "id": "db-102",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL statement is used to create a new table? To create a new table, use ______.",
      "options": [
        "CREATE TABLE",
        "ALTER TABLE",
        "UPDATE",
        "INSERT"
      ],
      "correct": 0,
      "explanation": "CREATE TABLE defines a new table and its columns, types and optional constraints. ALTER TABLE changes a table that already exists. UPDATE modifies values in existing records, while INSERT adds records to an existing target. These distinctions separate defining a storage structure from manipulating the data it contains. A complete CREATE TABLE statement needs the table name and suitable column definitions; the keyword alone identifies the operation but is not the entire definition."
    },
    {
      "id": "db-103",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which syntax correctly creates a Student table with ID as INT, Name as VARCHAR(100), and Age as INT?",
      "options": [
        "CREATE TABLE Student ( ID INT, Name VARCHAR(100), Age INT )",
        "CREATE ( TABLE Student ID INT, Name VARCHAR(100), Age INT )",
        "CREATE Student ( ID INT, Name VARCHAR(100), Age INT )",
        "CREATE TABLE ID INT, Name VARCHAR(100), Age INT )"
      ],
      "correct": 0,
      "explanation": "The first statement has the required structure: CREATE TABLE Student followed by parenthesized, comma-separated column definitions. ID and Age are integers, and Name is a variable-length character column with a maximum length of 100. The other choices either put TABLE inside the wrong parentheses, omit TABLE, or omit the Student name and opening syntax. The statement defines the listed columns but does not automatically make ID a primary key; that would require an explicit constraint. The options themselves supply the schema needed for this syntax question."
    },
    {
      "id": "db-104",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete this legacy SQL Server Member table definition. Use the supplied legacy IMAGE type for Photo.",
      "dragItems": [
        {
          "id": "i1",
          "text": "INT NOT NULL PRIMARY KEY"
        },
        {
          "id": "i2",
          "text": "NCHAR(255) NULL"
        },
        {
          "id": "i3",
          "text": "DATE NULL"
        },
        {
          "id": "i4",
          "text": "IMAGE NULL"
        },
        {
          "id": "i5",
          "text": "TIMESTAMP"
        },
        {
          "id": "i6",
          "text": "INT NOT NULL FOREIGN KEY"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Blank [4]",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Fill the blanks with INT NOT NULL PRIMARY KEY, NCHAR(255) NULL, DATE NULL and IMAGE NULL, respectively. Id identifies members, LastName follows the supplied fixed-length Unicode name convention, DateOfBirth stores a date and Photo uses the legacy binary IMAGE type explicitly requested. SQL Server TIMESTAMP is a rowversion value, not a date/time type. INT NOT NULL FOREIGN KEY does not supply the required referenced key and is not the Id definition needed here. New designs normally prefer VARBINARY(MAX) to IMAGE, but this item deliberately asks for the legacy declaration.",
      "code": "CREATE TABLE dbo.Member (\n Id [1],\n FirstName NCHAR(255) NULL,\n LastName [2],\n DateOfBirth [3],\n PhoneNumber NCHAR(10) NULL,\n Photo [4]\n);"
    },
    {
      "id": "db-105",
      "chapter": "ddl-obiecte",
      "type": "multiple",
      "question": "Which two keywords can validly appear in a CREATE TABLE definition? (Choose two.)",
      "options": [
        "ORDER BY",
        "PRIMARY KEY",
        "INSERT INTO",
        "CONSTRAINT"
      ],
      "correct": [
        1,
        3
      ],
      "explanation": "PRIMARY KEY and CONSTRAINT can appear in a CREATE TABLE definition. PRIMARY KEY identifies a unique, non-NULL row key, and CONSTRAINT can introduce a named integrity rule. ORDER BY belongs to result ordering in queries, not the ordinary table schema declaration. INSERT INTO adds rows after a table exists rather than defining its columns or constraints. The question asks about valid definition keywords, not every statement that may subsequently operate on the created table."
    },
    {
      "id": "db-106",
      "chapter": "ddl-obiecte",
      "type": "true_false",
      "question": "A PRIMARY KEY column can contain NULL values.",
      "options": [
        "True",
        "False"
      ],
      "correct": 1,
      "explanation": "False. A primary key cannot contain NULL in any of its key columns because it is the table's designated non-NULL identifier. For a composite key, that rule applies to every component as well as uniqueness of the combined values. Nullable ordinary columns and some UNIQUE-constraint arrangements behave differently, but neither changes the PRIMARY KEY requirement. Calling a column an ID does not by itself impose this rule; the declared primary-key constraint is what enforces it."
    },
    {
      "id": "db-107",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which keyword can be used in a create table statement?",
      "options": [
        "ORDER BY",
        "DISTINCT",
        "GROUP BY",
        "UNIQUE"
      ],
      "correct": 3,
      "explanation": "UNIQUE is valid in CREATE TABLE as a column-level or table-level constraint. It prevents duplicate key values according to the DBMS's uniqueness and NULL rules. ORDER BY sorts a query result, DISTINCT removes duplicate selected rows, and GROUP BY forms query groups; none is an ordinary column or table constraint in the definition requested here. UNIQUE should not be confused with a primary key: a table may have multiple unique constraints but only one primary key."
    },
    {
      "id": "db-108",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Why would you use the AUTO INCREMENT feature in a database table?",
      "options": [
        "To manually set the value of the primary key",
        "To automatically create a unique primary key value for each new record",
        "To allow duplicate values in the primary key",
        "To limit the number of records in the table"
      ],
      "correct": 1,
      "explanation": "AUTO INCREMENT generates a new numeric identifier automatically, which is commonly used for a primary-key field. It avoids manually choosing a value for each insertion. It does not allow duplicates in a primary key or set a maximum number of records. Generation and uniqueness are distinct mechanisms: a PRIMARY KEY or UNIQUE constraint must still enforce the required uniqueness. In SQL Server, the corresponding common column feature is IDENTITY rather than the AUTO_INCREMENT spelling used by some other systems. Generated numbers also need not be gapless."
    },
    {
      "id": "db-109",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which field typically uses the AUTO INCREMENT feature in a database?",
      "options": [
        "Address field",
        "City field",
        "Primary Key field",
        "Foreign Key field"
      ],
      "correct": 2,
      "explanation": "A primary-key field is the typical use for automatic incrementing because each new row needs a convenient identifier. Address and City are descriptive text fields rather than generated sequential numbers. A foreign key normally receives the identifier of an existing parent record; independently incrementing it would not reliably select the correct parent. Auto-generation alone does not make the column a primary key or eliminate every possibility of duplicate values under all operations. A suitable key constraint is still required for enforced identity."
    },
    {
      "id": "db-110",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What is the purpose of a FOREIGN KEY in a database?",
      "options": [
        "To uniquely identify each record in a table",
        "To enforce references to an eligible primary or unique key",
        "To allow duplicate values in a column",
        "To store NULL values in a table"
      ],
      "correct": 1,
      "explanation": "A foreign key enforces references to an eligible primary or unique key. It prevents a non-NULL child reference from naming a parent key that does not exist. It does not inherently identify each child row uniquely, because many children may share a parent. Although duplicates and NULL can occur in referencing columns when permitted, allowing them is not the foreign key's purpose. Nullability and additional uniqueness constraints independently determine whether those values are allowed for a particular design."
    },
    {
      "id": "db-111",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which command should you use to add a column to an existing table?",
      "options": [
        "ALTER",
        "UPDATE",
        "INSERT",
        "SELECT"
      ],
      "correct": 0,
      "explanation": "ALTER is the correct command family: use ALTER TABLE with an ADD clause to add a column to an existing table. UPDATE changes values in existing rows and does not create a new field. INSERT adds rows rather than columns. SELECT retrieves a result set. The complete statement must specify the table, new column name and type, and it may need a default or nullability plan when rows already exist. The operation changes the schema, not merely the stored values."
    },
    {
      "id": "db-112",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which description best matches ALTER TABLE?",
      "options": [
        "Modify the structure of an existing table, such as adding/dropping columns or constraints",
        "Update row values in a table",
        "Retrieve rows from a table",
        "Create a new database"
      ],
      "correct": 0,
      "explanation": "ALTER TABLE modifies an existing table's structure, for example by adding or dropping a column or adding or removing a constraint. UPDATE changes row values without redefining the table. SELECT retrieves rows, and CREATE DATABASE creates a different kind of object. Some ALTER operations require valid conversions, compatible dependencies and appropriate handling of existing data, so structural change is not unrestricted. The distinction being tested is DDL for schema modification versus DML for changes to the records held in that schema."
    },
    {
      "id": "db-113",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "In PostgreSQL, which DDL statement renames column OldName to NewName in Customer?",
      "options": [
        "ALTER TABLE Customer RENAME COLUMN OldName TO NewName;",
        "UPDATE Customer SET OldName = NewName;",
        "CREATE COLUMN NewName FROM OldName;",
        "INSERT COLUMN NewName;"
      ],
      "correct": 0,
      "explanation": "In PostgreSQL, ALTER TABLE Customer RENAME COLUMN OldName TO NewName renames the existing column while retaining its data. UPDATE Customer SET OldName = NewName would assign row values and would not rename the column. CREATE COLUMN and INSERT COLUMN are not the supplied PostgreSQL renaming syntax. The explicit dialect matters: SQL Server normally uses sp_rename for this task rather than the PostgreSQL form. Renaming may also require checking application code that still refers to the old name."
    },
    {
      "id": "db-114",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement correctly removes a foreign key constraint named FK_Order_Customer from the Orders table?",
      "options": [
        "ALTER TABLE Orders DROP CONSTRAINT FK_Order_Customer;",
        "DELETE TABLE Orders FOREIGN KEY FK_Order_Customer;",
        "DELETE FOREIGN KEY FK_Order_Customer;",
        "ALTER FOREIGN KEY FK_Order_Customer;"
      ],
      "correct": 0,
      "explanation": "ALTER TABLE Orders DROP CONSTRAINT FK_Order_Customer removes the named constraint from Orders. The table and its existing rows remain, but that foreign-key rule no longer validates future changes. DELETE TABLE and DELETE FOREIGN KEY are not the SQL Server structural-change syntax, and ALTER FOREIGN KEY alone is not the required command. Dropping the constraint is different from deleting the rows that it relates. Appropriate permissions are required, and dependent application assumptions should be reviewed before removing the integrity protection."
    },
    {
      "id": "db-115",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The Person table already contains rows. A developer tries to add DateOfBirth as NOT NULL and the statement fails because existing rows have no value for the new column. Which statement fixes the problem by supplying a default value?",
      "code": "-- Person already contains rows.\nALTER TABLE Person ADD DateOfBirth DATE NOT NULL;",
      "options": [
        "ALTER TABLE Person ADD DateOfBirth VARCHAR(10) NOT NULL;",
        "ALTER TABLE Person ADD DateOfBirth DATE NOT NULL DEFAULT '19000101';",
        "DELETE FROM Person;",
        "ALTER TABLE Person ADD DateOfBirth INT NOT NULL;"
      ],
      "correct": 1,
      "explanation": "Use ALTER TABLE Person ADD DateOfBirth DATE NOT NULL DEFAULT '19000101'. The default supplies a non-NULL date for existing rows while the column is added, satisfying the new constraint. Merely changing the type to VARCHAR or INT leaves the same missing-value problem. Deleting all rows is destructive and does not meet the requirement to fix the addition by supplying a default. The date is a technical placeholder, not a recovered real birthdate; production designs should distinguish unknown information from known dates rather than silently treating the placeholder as factual.",
      "image": "assets/databases/pdf-077-person.png",
      "imageAlt": "person"
    },
    {
      "id": "db-116",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table named Customer. You need to add a new column named District. Which statement should you use?",
      "options": [
        "MODIFY TABLE Customer ADD District INTEGER",
        "ALTER TABLE Customer MODIFY District INTEGER",
        "MODIFY TABLE Customer District INTEGER",
        "ALTER TABLE Customer ADD District INTEGER"
      ],
      "correct": 3,
      "explanation": "ALTER TABLE Customer ADD District INTEGER adds the named integer column to the existing table. MODIFY TABLE is not SQL Server's command for this operation, and ALTER TABLE Customer MODIFY District INTEGER neither uses the required ADD syntax nor expresses creation of a new column here. The statement changes the schema rather than updating a district value in existing records. Whether the new column is nullable or needs a default depends on its full definition and the existing data requirements."
    },
    {
      "id": "db-117",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "How would you remove a column in a table using the ALTER statement?",
      "options": [
        "ALTER TABLE table_name REMOVE COLUMN column_name",
        "ALTER TABLE table_name DROP column_name",
        "ALTER TABLE table_name DROP COLUMN column_name",
        "ALTER TABLE table_name DELETE column_name"
      ],
      "correct": 2,
      "explanation": "ALTER TABLE table_name DROP COLUMN column_name is the correct SQL Server form. DROP COLUMN explicitly identifies the structural element being removed. REMOVE COLUMN and DELETE are not the SQL Server syntax for dropping a column, while DROP column_name without COLUMN is not the offered valid form for this task. This removes the field and its stored values rather than selected records. Constraints, indexes or other dependencies can prevent the operation until handled, even when the syntax itself is correct."
    },
    {
      "id": "db-118",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The statement below fails because REMOVE is not the correct keyword for deleting a column. Which replacement statement is correct?",
      "code": "ALTER TABLE Customers\nREMOVE SSN;",
      "options": [
        "ALTER TABLE Customers DELETE SSN;",
        "ALTER TABLE Customers DELETE COLUMN SSN;",
        "ALTER TABLE Customers DROP SSN;",
        "ALTER TABLE Customers DROP COLUMN SSN;"
      ],
      "correct": 3,
      "explanation": "Replace the statement with ALTER TABLE Customers DROP COLUMN SSN. SQL Server uses DROP COLUMN, not REMOVE, DELETE or DELETE COLUMN, for this schema operation. ALTER TABLE Customers DROP SSN omits the required COLUMN keyword in the form being tested. Removing a column is different from setting its values to NULL or deleting customer records. Existing constraints, indexes or dependencies involving SSN may need attention before the otherwise correct statement can execute successfully."
    },
    {
      "id": "db-119",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "Match each command to what it removes.",
      "dragItems": [
        {
          "id": "a",
          "text": "TRUNCATE TABLE"
        },
        {
          "id": "b",
          "text": "DELETE FROM table"
        },
        {
          "id": "c",
          "text": "DROP TABLE"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Selected rows (or all rows if WHERE is omitted), while keeping the table",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "All rows while keeping the table definition",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "The table definition together with its data",
          "correctItemId": "c"
        }
      ],
      "explanation": "DELETE FROM table removes selected rows, or all rows if WHERE is omitted, while preserving the table. TRUNCATE TABLE removes all rows without a WHERE filter and retains the definition. DROP TABLE removes the table object along with its data. DELETE can also remove every row, so the mapping distinguishes its filtering capability from TRUNCATE's all-row operation rather than claiming that only TRUNCATE can empty a table. Restrictions, logging and identity behavior differ between the commands, making them non-interchangeable in a real workload."
    },
    {
      "id": "db-120",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What statement would you use to delete the Equipment table?",
      "options": [
        "DELETE TABLE Equipment",
        "DROP TABLE Equipment",
        "REMOVE TABLE Equipment",
        "TRUNCATE TABLE Equipment"
      ],
      "correct": 1,
      "explanation": "DROP TABLE Equipment removes the Equipment table definition and its data. TRUNCATE TABLE Equipment empties it but leaves the table available for future inserts. DELETE TABLE is not the correct row-deletion or table-removal syntax, and REMOVE TABLE is not the SQL Server command. Deleting selected rows would use DELETE FROM Equipment with an appropriate WHERE condition instead. The question asks to remove the table object itself, not just clear its records."
    },
    {
      "id": "db-121",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement removes all rows from a table while keeping the table definition and without logging each individual row deletion?",
      "options": [
        "DELETE TABLE",
        "DROP TABLE",
        "TRUNCATE TABLE",
        "REMOVE TABLE"
      ],
      "correct": 2,
      "explanation": "TRUNCATE TABLE removes all rows while retaining the table definition and, in SQL Server, logs page deallocations rather than logging each row's deletion. It is not entirely unlogged and can be rolled back within a transaction. DROP TABLE removes the object itself. DELETE TABLE and REMOVE TABLE are not the correct syntax in these choices. TRUNCATE cannot use a WHERE filter and has restrictions, including those involving foreign-key references, so it is not a universal replacement for DELETE."
    },
    {
      "id": "db-122",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table named Product that contains one million rows. You need to search for product information in the Product table by using the product's unique ID. What will make this type of search more efficient?",
      "options": [
        "A cursor",
        "A subquery",
        "A trigger",
        "An index"
      ],
      "correct": 3,
      "explanation": "An index on the searched product identifier can let the optimizer locate matching rows without scanning all one million records. A unique or primary-key index is especially suitable when that identifier is genuinely unique. A cursor processes rows procedurally and does not supply the missing lookup structure. A subquery changes how a query is expressed, not automatically how efficiently records are found. A trigger reacts to events and is unrelated to making this identifier search directly efficient. Actual plan choice still depends on statistics and the workload."
    },
    {
      "id": "db-123",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The query below is slow on a very large ProAthlete table. Which database object added on Salary can improve filtering performance?",
      "code": "SELECT *\nFROM ProAthlete\nWHERE Salary > 500000;",
      "options": [
        "NOT NULL constraint",
        "DEFAULT constraint",
        "Index",
        "Foreign key"
      ],
      "correct": 2,
      "explanation": "An index with Salary as an appropriate leading key can support the Salary > 500000 range predicate. It may allow a seek and avoid inspecting every row, depending on selectivity and the cost of retrieving the selected columns. NOT NULL and DEFAULT constrain or supply values, while a foreign key validates a reference; they do not provide this range-search access path. Because SELECT * may require many columns and many rows may qualify, an index is a potential improvement rather than a guarantee that every execution becomes faster."
    },
    {
      "id": "db-124",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement about indexes, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "An appropriate index can improve SELECT performance.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Indexes require additional storage space.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Adding indexes always makes INSERT and UPDATE faster.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Yes / Yes / No. An appropriate index can improve SELECT by supporting filtering, joining, ordering or covering the query. Indexes require storage for their entries in addition to the base data. Adding indexes does not always make INSERT and UPDATE faster: writes may have to maintain every affected index, increasing work. Benefits depend on which queries use the index and how much write overhead it adds. The word always makes the third statement false even though an index can help locate the rows an UPDATE targets."
    },
    {
      "id": "db-125",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What does a non-clustered index create?",
      "options": [
        "Additional rows in the base table",
        "Additional columns in the base table",
        "A separate index structure containing key values and row locators",
        "A full duplicate copy of the table"
      ],
      "correct": 2,
      "explanation": "A nonclustered index is a separate index structure containing indexed keys and locators for the corresponding base rows, with optional included columns in SQL Server. It does not add business rows or columns to the base table. Nor must it contain a complete duplicate copy of every base-table column. The locator is typically a heap row identifier or the clustered key, depending on the table's organization. This separate structure provides an alternate access path without becoming another logical copy of the entire table."
    },
    {
      "id": "db-126",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "The terms \"bitmap,\" \"b-tree,\" and \"hash\" refer to which type of database structure?",
      "options": [
        "View",
        "Function",
        "Index",
        "Stored procedure",
        "Trigger"
      ],
      "correct": 2,
      "explanation": "Bitmap, B-tree and hash refer to index structures or access-method families. They organize lookup information in different ways and suit different workloads, although not every DBMS supports every kind as a general index option. A view defines a query; a function computes and returns a result; a stored procedure encapsulates executable statements; and a trigger executes in response to an event. None of those object categories is classified by these index organization terms. The terminology is broader than SQL Server's ordinary disk-based rowstore indexes."
    },
    {
      "id": "db-127",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Identify whether each index characteristic describes a clustered or a non-clustered index. Use the introductory SQL Server clustered-index model; physical page layout does not guarantee SELECT result order.",
      "dragItems": [
        {
          "id": "a",
          "text": "Non-clustered"
        },
        {
          "id": "b",
          "text": "Clustered"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Sorts the physical table data by the indexed key.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Stores index entries in a separate structure from the table data.",
          "correctItemId": "a"
        }
      ],
      "explanation": "The clustered index matches the introductory description of ordering the table's data by the indexed key. In a SQL Server clustered rowstore, the data rows are at the leaf level of that index. A nonclustered index keeps a separate access structure with keys and row locators. Actual physical page placement can be fragmented, and neither structure guarantees the order in which a SELECT returns rows. Use ORDER BY when result order matters. The mapping concerns storage/access organization, not an implicit sorting contract for every query."
    },
    {
      "id": "db-128",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which type of index determines the physical order of table rows according to the indexed key? Use the introductory SQL Server index model. ORDER BY is still required to guarantee query result order.",
      "options": [
        "non-sequential",
        "sequential",
        "non-clustered",
        "clustered"
      ],
      "correct": 3,
      "explanation": "Clustered is the expected answer under the stated introductory SQL Server model. Its leaf level holds the table's data rows in clustered-key order, whereas a nonclustered index supplies a separate access structure. Sequential and non-sequential are not the relevant SQL Server index categories in these choices. The wording must not be interpreted as guaranteeing contiguous physical pages or sorted query output: pages can be fragmented and the optimizer can choose different access paths. An explicit ORDER BY remains necessary for a guaranteed result order."
    },
    {
      "id": "db-129",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table product that contains one million row. You need to search for product information using the following query What will make this type of search more efficient?",
      "code": "SELECT ProductName, Price FROM Product WHERE Category = 'Science Books'",
      "options": [
        "A clustered index on the ProductName column",
        "A clusterd index on the Price column",
        "A non-clustered index on the Category column",
        "A non-clustered on the Price column"
      ],
      "correct": 2,
      "explanation": "Choose a nonclustered index on Category because Category is the column used in the equality predicate. Such an index can identify the Science Books rows without a full scan when the access path is cost-effective. Indexes on ProductName or Price do not directly index the predicate being tested. Including ProductName and Price in a suitable covering index could avoid extra lookups, but that enhancement is not among the offered choices. If most products belong to the category, the optimizer may still prefer a scan."
    },
    {
      "id": "db-130",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete each statement about the Flight table indexes. Use the introductory SQL Server clustered-rowstore model; ORDER BY is still required to guarantee query-result order.",
      "image": "assets/databasesimg/q163_1.png",
      "dragItems": [
        {
          "id": "a",
          "text": "foreign key"
        },
        {
          "id": "b",
          "text": "clustered index"
        },
        {
          "id": "c",
          "text": "nonclustered index"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Adding a ______ on FlightNumber physically sorts rows by FlightNumber.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Adding a ______ on Airline speeds retrieval but does not physically sort rows by Airline.",
          "correctItemId": "c"
        }
      ],
      "explanation": "The blanks are clustered index on FlightNumber and nonclustered index on Airline. In the introductory SQL Server rowstore model, the clustered key organizes the data leaf rows, while the nonclustered Airline index provides an additional access path without changing that clustered ordering. A foreign key enforces a reference and does not replace either index's role. The illustrated FlightNumber values do not by themselves prove an index exists. Even with the clustered index, a query needs ORDER BY FlightNumber to guarantee sorted output rather than relying on storage layout."
    },
    {
      "id": "db-131",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL Server statement creates an index named IX_Employee_EmployeeID on Employee(EmployeeID)?",
      "options": [
        "CREATE INDEX IX_Employee_EmployeeID ON Employee (EmployeeID);",
        "CREATE TABLE INDEX IX_Employee_EmployeeID ON Employee (EmployeeID);",
        "ALTER INDEX Employee ADD EmployeeID;",
        "INSERT INDEX IX_Employee_EmployeeID INTO Employee (EmployeeID);"
      ],
      "correct": 0,
      "explanation": "CREATE INDEX IX_Employee_EmployeeID ON Employee (EmployeeID) correctly gives the index name, target table and indexed column. CREATE TABLE INDEX adds an inappropriate object keyword. ALTER INDEX operates on an existing index and does not use the offered ADD syntax to create this one. INSERT INDEX is not a DDL command for index creation. The statement creates an ordinary index, not automatically a unique constraint or primary key; adding UNIQUE would express a separate uniqueness requirement if the data and design supported it."
    },
    {
      "id": "db-132",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What is a view? A virtual table defined by a query is a ______.",
      "options": [
        "view",
        "trigger",
        "index",
        "stored procedure"
      ],
      "correct": 0,
      "explanation": "A view is a virtual table defined by a query. Users can reference it in SELECT statements while the DBMS evaluates the view definition against its underlying objects. A trigger reacts to a database event, an index provides an access path, and a stored procedure encapsulates executable logic rather than a table expression queried in the same way. Ordinary views do not independently store a snapshot of their result rows. Materialized or indexed views are special mechanisms and should not be assumed in this basic definition."
    },
    {
      "id": "db-133",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Evaluate the following statement. A view can be used to ensure referential integrity. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed.",
        "Save an extra copy of data stored in a separate table.",
        "Limit access to specific rows or columns of data in a table.",
        "Save historical data before deleting it from the base table."
      ],
      "correct": 2,
      "explanation": "Replace the statement with limiting access to specific rows or columns. A view can expose only the selected fields and records and can be granted to users as part of a properly designed permission model. Referential integrity is normally enforced with foreign-key constraints, not by a view definition. A regular view does not save an extra copy of its result rows or archive data before deletion. Access to underlying tables and other security paths must also be controlled; merely creating a restricted view does not remove existing broader permissions."
    },
    {
      "id": "db-134",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "When you query a regular (non-materialized) view, where do the returned values normally come from?",
      "options": [
        "From a permanently stored copy inside the view",
        "From the current data in the underlying tables evaluated by the view query",
        "From an automatic backup file",
        "Only from an index created on the view"
      ],
      "correct": 1,
      "explanation": "The values normally come from the current underlying table data evaluated by the regular view's query. A view stores a definition, not a permanently saved independent result set. An automatic backup is not consulted whenever the view is queried, and an index on the view is not required for an ordinary view to return rows. Transaction isolation and visibility rules still apply to what current data a particular statement can see. A materialized or indexed view would involve additional mechanisms expressly excluded from this basic question."
    },
    {
      "id": "db-135",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You have a table named Product. You create a view that includes all the products from the Product table that are in the Furniture category. You execute a statement on the Product table that deletes all the products in the Furniture category. After you execute the statement, the result set of the view is:",
      "options": [
        "Empty",
        "Deleted",
        "Unchanged",
        "Archived"
      ],
      "correct": 0,
      "explanation": "The view's result is empty. Its definition still asks for Furniture products, but after those rows are deleted from Product there are no matching underlying records to return. The view object itself is not deleted by this DML operation. Unchanged would incorrectly treat a regular view as a stored snapshot, and archived would imply a separate historical-storage mechanism that is not stated. Later inserts of Furniture rows could make the same unchanged view definition return data again."
    },
    {
      "id": "db-136",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which syntax correctly creates a view named ActiveProducts from a SELECT query?",
      "options": [
        "CREATE VIEW ActiveProducts AS SELECT * FROM Product WHERE Active = 1;",
        "CREATE VIEW ActiveProducts AS UPDATE Product;",
        "DROP VIEW ActiveProducts AS SELECT * FROM Product;",
        "CREATE ActiveProducts VIEW SELECT * FROM Product;"
      ],
      "correct": 0,
      "explanation": "CREATE VIEW ActiveProducts AS SELECT * FROM Product WHERE Active = 1 is the valid definition. CREATE VIEW names the new object, AS introduces its query, and SELECT specifies the columns and filtered rows. UPDATE Product is not a query definition for this view. DROP VIEW removes an existing view rather than creating one, and CREATE ActiveProducts VIEW has the keywords in the wrong order. The view exposes matching data when queried; it does not copy those product rows into a separate permanent table."
    },
    {
      "id": "db-137",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which keyword must be included in a create view statement?",
      "options": [
        "WHERE",
        "ORDER BY",
        "UPDATE",
        "SELECT"
      ],
      "correct": 3,
      "explanation": "SELECT is required to define the view's query. WHERE is optional because a view may expose all rows, and ORDER BY is not a generally required or generally permitted ordering guarantee inside a SQL Server view definition. UPDATE changes data rather than supplying the view's defining query. A typical form is CREATE VIEW name AS SELECT columns FROM source. For reliably sorted results, query the view with an outer ORDER BY instead of expecting the definition itself to fix every consumer's row order."
    },
    {
      "id": "db-138",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete the SQL Server view definition for North American mammals shown in the supplied figure. Expose a.Id and a.Name from Animal a, retaining the displayed filters a.Class = 'Mammals' and a.InNorthAmerica = 1. Place one fragment in each numbered blank.",
      "image": "assets/databasesimg/q172_1.jpeg",
      "dragItems": [
        {
          "id": "a",
          "text": "JOIN Animal a"
        },
        {
          "id": "b",
          "text": "GENERATE VIEW [dbo].[NorthAmericanMammals_View]"
        },
        {
          "id": "c",
          "text": "CREATE VIEW [dbo].[NorthAmericanMammals_View]"
        },
        {
          "id": "d",
          "text": "AS SELECT a.Id, a.Name"
        },
        {
          "id": "e",
          "text": "AS JOIN a.Id, a.Name"
        },
        {
          "id": "f",
          "text": "FROM Animal a"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "d"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "f"
        }
      ],
      "explanation": "Choose CREATE VIEW [dbo].[NorthAmericanMammals_View], AS SELECT a.Id, a.Name and FROM Animal a. CREATE VIEW names the reusable virtual table, AS introduces its query, and FROM declares Animal with alias a. The supplied WHERE conditions keep only mammals whose North-America flag is 1; AND requires both conditions. GENERATE VIEW is not T-SQL creation syntax. AS JOIN cannot replace the SELECT projection, and JOIN Animal a is not a complete FROM clause for this single-table query. The definition matches the actual mammal figure rather than an unrelated bird schema.",
      "code": "[1]\n[2]\n[3]\nWHERE a.Class = 'Mammals'\n  AND a.InNorthAmerica = 1;"
    },
    {
      "id": "db-139",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete the view definition for North American mammals.",
      "dragItems": [
        {
          "id": "a",
          "text": "AS JOIN a.Id, a.Name"
        },
        {
          "id": "b",
          "text": "GENERATE VIEW [dbo].[NorthAmericanMammals_View]"
        },
        {
          "id": "c",
          "text": "CREATE VIEW [dbo].[NorthAmericanMammals_View]"
        },
        {
          "id": "d",
          "text": "JOIN Animal a"
        },
        {
          "id": "e",
          "text": "AS SELECT a.Id, a.Name"
        },
        {
          "id": "f",
          "text": "FROM Animal a"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "e"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "f"
        }
      ],
      "explanation": "Use CREATE VIEW [dbo].[NorthAmericanMammals_View], then AS SELECT a.Id, a.Name, then FROM Animal a. The provided WHERE clause filters the table alias a to Mammals with InNorthAmerica = 1. GENERATE VIEW is not T-SQL view-creation syntax. AS JOIN cannot replace the SELECT list, and JOIN Animal a does not provide a complete single-source FROM clause. The resulting regular view exposes the two chosen columns for matching current animals; it is not a parameterized procedure or a stored copy of those rows.",
      "code": "[1]\n[2]\n[3]\nWHERE a.Class = 'Mammals' AND a.InNorthAmerica = 1;"
    },
    {
      "id": "db-140",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which of the following statements are true of a view?",
      "options": [
        "Querying a view automatically inserts data into its source tables",
        "A view simplifies how users work with data.",
        "A view is not reusable.",
        "A view joins static tables using user-defined parameters."
      ],
      "correct": 1,
      "explanation": "A view simplifies how users work with data by packaging a query behind a reusable table-like name. It can hide joins, calculations or filtering and can participate in a permission design. Querying a view does not automatically insert data into its source tables, although some views support explicit INSERT, UPDATE or DELETE operations. Views are reusable, so the contrary option is false. Ordinary views do not accept user-defined parameters as procedures or table-valued functions do, and their source tables need not be static."
    },
    {
      "id": "db-141",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "What is the correct syntax for deleting a view?",
      "options": [
        "DELETE VIEW view_name",
        "REMOVE VIEW view_name",
        "DROP VIEW view_name",
        "ALTER VIEW view_name"
      ],
      "correct": 2,
      "explanation": "DROP VIEW view_name removes the view definition. DELETE normally removes rows from a data target and is not followed by VIEW to remove a schema object. REMOVE VIEW is not SQL Server syntax. ALTER VIEW changes an existing definition rather than deleting it. Dropping a regular view does not delete the underlying base tables or their records; it removes the named query interface. Queries and other objects that depend on that view may then need to be changed."
    },
    {
      "id": "db-142",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You need a view that exposes the Name column from Games. When the view is queried, the result must be sorted by Name. Which SQL Server Management Studio script is correct?",
      "options": [
        "CREATE VIEW vw_Mygames AS SELECT Name FROM Games ORDER BY Name;",
        "CREATE VIEW vw_Mygames AS SELECT * FROM Games;",
        "CREATE VIEW vw_Mygames AS SELECT Name FROM Games;\nGO\nSELECT Name FROM vw_Mygames ORDER BY Name;",
        "CREATE VIEW vw_Mygames AS SELECT * FROM Games WHERE Name BETWEEN 'A' AND 'Z';"
      ],
      "correct": 2,
      "explanation": "Choose the sequence that defines vw_Mygames with SELECT Name FROM Games and then queries it in a separate batch with ORDER BY Name. The view controls which column is exposed; the consuming SELECT controls guaranteed result ordering. GO separates the creation batch in the corrected script. The first choice places ORDER BY inside an ordinary SQL Server view definition without the required special context, and it would not establish a general ordering guarantee anyway. SELECT * exposes more than requested. BETWEEN 'A' AND 'Z' filters values rather than sorting them and can exclude legitimate names."
    },
    {
      "id": "db-143",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You need to remove a view named EmployeeView from your database. Which statement should you use?",
      "options": [
        "DELETE VIEW EmployeeView",
        "DELETE EmployeeView",
        "DROP EmployeeView",
        "DROP VIEW EmployeeView"
      ],
      "correct": 3,
      "explanation": "DROP VIEW EmployeeView removes the named view object. DELETE VIEW is not the schema-removal command, DELETE EmployeeView would refer to a data-changing operation through the view rather than removing its definition, and DROP EmployeeView omits the object type. The base tables are not dropped by DROP VIEW. Permissions and dependent queries may be affected because the view interface disappears, but its underlying data remains unless some separate operation changes it."
    },
    {
      "id": "db-144",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A named group of SQL statements that can be executed in a database is called a:",
      "options": [
        "Subroutine",
        "Formula",
        "Stored procedure",
        "Method"
      ],
      "correct": 2,
      "explanation": "A stored procedure is a named executable collection of database statements that can be invoked later. It may accept parameters, perform several operations and return result sets or output values. Subroutine and method are broader programming terms, not the specific SQL Server object category offered here. Formula is not the standard name for an executable group of SQL statements stored as this object. Unlike a regular view, a stored procedure can encapsulate procedural workflow rather than only a query expression."
    },
    {
      "id": "db-145",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which is a valid purpose of a stored procedure?",
      "options": [
        "Encapsulate and reuse database logic",
        "Reduce the size of every table",
        "Bypass all permissions",
        "Replace primary keys"
      ],
      "correct": 0,
      "explanation": "Stored procedures encapsulate and reuse database logic. Callers can invoke a defined operation instead of duplicating all its SQL statements in every client. They do not inherently shrink every table or bypass all permission checks; execution still occurs under a defined security context. Nor do they replace primary keys, which enforce row identification. Reuse can improve maintainability and sometimes reduce round trips or repeated compilation work, but the valid purpose here is reusable executable logic, not an unconditional performance or security shortcut."
    },
    {
      "id": "db-146",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You develop a database to store data about textbooks. The data must be stored to process at a later time. Which database object should you use to store the data?",
      "options": [
        "View",
        "Table",
        "Function",
        "Stored procedure"
      ],
      "correct": 1,
      "explanation": "Use a table to persist textbook data for later processing. Its columns describe attributes and its rows hold the stored textbook records. A regular view exposes a query over underlying data rather than supplying an independent persistent store of those records. Functions and stored procedures contain logic used to compute, retrieve or modify data; they do not replace a table as the repository for all the textbook facts. The scenario asks where to store the data, not where to store the code that later processes it."
    },
    {
      "id": "db-147",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "You write a series of SQL statements that perform a long, complex query. The statements then send the result in an email. You want to be able to manually call the code any time you need to. Which database object can you use to store the code ?",
      "options": [
        "Stored procedure",
        "Function",
        "Trigger",
        "View"
      ],
      "correct": 0,
      "explanation": "Use a stored procedure to package the multi-step query and email workflow so it can be invoked manually when needed. A function is intended to return a scalar or table value and, in SQL Server, has restrictions on side effects that make it unsuitable for this email-sending workflow. A trigger responds automatically to its associated event rather than being the ordinary manually invoked routine. A view defines a reusable query interface but does not encapsulate the full operational sequence described here."
    },
    {
      "id": "db-148",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which permission does a user need in order to run a stored procedure?",
      "options": [
        "EXECUTE",
        "SELECT",
        "ALTER",
        "CONNECT"
      ],
      "correct": 0,
      "explanation": "EXECUTE is the permission specifically associated with invoking a stored procedure. SELECT authorizes reading a selectable object such as a table or view and does not substitute for procedure execution permission. ALTER permits changing a definition rather than running it. CONNECT permits access to the database service or database scope but alone does not authorize every routine. Actual effective access can also depend on role membership, ownership chaining and execution context; the question asks for the relevant operation-level permission."
    },
    {
      "id": "db-149",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A group of commands that return a value is called _________.",
      "options": [
        "Procedure",
        "Function",
        "Trigger",
        "View"
      ],
      "correct": 1,
      "explanation": "A function is the routine category whose contract is to return a value: either a scalar or, for a table-valued function, a table. A stored procedure can produce results and output parameters, but its central definition is not the same value-expression contract. A trigger executes in response to an event, while a view is a named query exposed like a virtual table. The word value should not be read as excluding table-valued functions; it distinguishes the function's declared result from a general procedure's workflow."
    },
    {
      "id": "db-150",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "In SQL Server, which statement describes a required result contract of a user-defined function, unlike a stored procedure that need not explicitly return application data?",
      "options": [
        "Must be called from a trigger.",
        "Must return a scalar value or a table.",
        "Cannot execute within a transaction started by its caller.",
        "Cannot accept parameters."
      ],
      "correct": 1,
      "explanation": "A SQL Server user-defined function has a declared result: a scalar value or a table. A stored procedure may perform actions without explicitly returning application data, even though procedures can also provide result sets, output parameters or integer status returns. A function can accept input parameters and need not be invoked from a trigger. It can also execute inside a transaction started by its caller, so that distractor is false. Participation in an existing transaction is different from placing explicit BEGIN TRANSACTION or COMMIT control inside a T-SQL function body, which is restricted."
    },
    {
      "id": "db-151",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL query calls a scalar function named CalculateAge to calculate and display the age of employees?",
      "options": [
        "SELECT Name, dbo.CalculateAge(BirthDate) AS Age FROM Employees;",
        "EXEC CalculateAge @BirthDate = '1990-01-01';",
        "SELECT dbo.CalculateAge() FROM Employees;",
        "SELECT * FROM dbo.CalculateAge();"
      ],
      "correct": 0,
      "explanation": "The first query calls dbo.CalculateAge(BirthDate) once for each selected employee row and displays the result under the alias Age alongside Name. It passes the employee's BirthDate to the scalar function. The EXEC example does not produce the requested row-by-row SELECT result. Calling CalculateAge() without an argument omits the birthdate needed by this function. Selecting FROM dbo.CalculateAge() treats it as a table-valued function rather than a scalar expression. The distinction is where the function appears and what kind of result it returns."
    },
    {
      "id": "db-152",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL query calls a table-valued function named GetEmployeesByDepartment and displays all employees in department 3?",
      "options": [
        "SELECT * FROM dbo.GetEmployeesByDepartment(3);",
        "SELECT * FROM Employees WHERE DepartmentID = dbo.GetEmployeesByDepartment(3);",
        "EXEC GetEmployeesByDepartment 3;",
        "SELECT dbo.GetEmployeesByDepartment();"
      ],
      "correct": 0,
      "explanation": "SELECT * FROM dbo.GetEmployeesByDepartment(3) uses the table-valued function as a row source and passes department 3 as its argument. Comparing DepartmentID to the function as though it were a scalar value is not the right use of a returned table. EXEC is the ordinary procedure-invocation form, not the SELECT FROM form requested for this function. The no-argument expression both omits the department and treats the function as scalar. The function's own implementation determines the returned employee columns."
    },
    {
      "id": "db-153",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement about views, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Views can help limit what people see within a database.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Views can be created from multiple tables.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Views can be altered using an ADD COLUMN clause.",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "Views normally store temporary copies of table data.",
          "correctItemId": "b"
        }
      ],
      "explanation": "Yes / Yes / No / No. Views can expose restricted rows or columns, and their queries may combine multiple tables. Their definitions are changed with ALTER VIEW and a revised query, not a table-style ADD COLUMN clause. A regular view stores its query definition rather than temporary result copies. A view-based access design must also account for permissions on the base tables, and special indexed or materialized views have additional storage behavior. Neither caveat changes the four basic mappings requested here."
    },
    {
      "id": "db-154",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A view vw_customers currently selects FirstName and LastName. You must add CustomerID as the first column. Preserve the existing view object and its grants. Which statement should you use?",
      "options": [
        "CREATE VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers",
        "DROP VIEW vw_customers; CREATE VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers",
        "ALTER VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers",
        "ALTER TABLE vw_customers ADD CustomerID"
      ],
      "correct": 2,
      "explanation": "ALTER VIEW vw_customers AS SELECT CustomerID, FirstName, LastName FROM Customers changes the existing view while retaining its identity and existing grants, as required by the clarified stem. CREATE VIEW alone fails when the object already exists. Dropping and recreating it can produce a similar query interface but does not preserve those object-level properties in the same way and can lose permissions. ALTER TABLE ADD targets table structure and is not the way to change a view's SELECT list. The SELECT order makes CustomerID the first exposed column."
    },
    {
      "id": "db-155",
      "chapter": "ddl-obiecte",
      "type": "multiple",
      "question": "Which two are common benefits of stored procedures? (Choose two.)",
      "options": [
        "Complex SQL code can be reused",
        "Speed / reduced repeated parsing and network work",
        "They remove all permission requirements",
        "They make every database portable between vendors"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "Choose reusable complex SQL and potential speed or reduced repeated parsing and network work. A procedure lets callers reuse a named operation and can reduce round trips by executing several statements server-side; SQL Server can also reuse suitable execution plans. These are common possible benefits, not a promise that every procedure is faster than equivalent parameterized SQL. Procedures do not remove authorization requirements and their procedural dialects are not universally portable between vendors. Bad plans, parameter sensitivity or inefficient SQL can still make a procedure slow."
    },
    {
      "id": "db-156",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement about ALTER TABLE, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "ALTER TABLE can add a new column.",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "In SQL Server, ALTER TABLE can directly change the IDENTITY specification of an existing column.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "ALTER TABLE can drop columns.",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "ALTER TABLE can modify the data type of an existing column when the conversion is valid.",
          "correctItemId": "a"
        }
      ],
      "explanation": "Yes / No / Yes / Yes. ALTER TABLE can add and drop columns and can alter a column's data type when the conversion and dependencies permit it. SQL Server does not support directly toggling the IDENTITY property of an existing column with ALTER COLUMN; changing that design typically needs a replacement/rebuild strategy. Valid syntax alone does not guarantee successful alteration: existing data, constraints and indexes can block it. The question separates supported kinds of schema changes from a specifically unsupported direct IDENTITY alteration."
    },
    {
      "id": "db-157",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "Arrange the essential parts needed to create an index named idx_last_name on Customers(LastName).",
      "dragItems": [
        {
          "id": "a",
          "text": "CREATE INDEX idx_last_name"
        },
        {
          "id": "b",
          "text": "Customers(LastName)"
        },
        {
          "id": "c",
          "text": "ON"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "c"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "b"
        }
      ],
      "explanation": "The order is CREATE INDEX idx_last_name, ON, then Customers(LastName). Together they form CREATE INDEX idx_last_name ON Customers(LastName). The index name follows CREATE INDEX; ON connects that new access structure to its target table; the parentheses list its key column. This does not create another Customers table or add a LastName column. Without UNIQUE, the statement also does not require every last name to be different, which would normally be an inappropriate restriction for customer data."
    },
    {
      "id": "db-158",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "An OrderDetails table must reject non-NULL quantities lower than 1. Which column definition enforces this condition? NULL remains allowed unless NOT NULL is added.",
      "options": [
        "Qty INT CONSTRAINT (Qty >= 1)",
        "Qty INT UNIQUE (Qty >= 1)",
        "Qty INT CHECK (Qty >= 1)",
        "Qty INT HAVING (Qty >= 1)"
      ],
      "correct": 2,
      "explanation": "Qty INT CHECK (Qty >= 1) is the valid definition. CHECK rejects rows for which the predicate is FALSE, so a non-NULL quantity below 1 is rejected. In SQL Server a NULL quantity makes this comparison UNKNOWN and is not rejected by CHECK alone, matching the stem's explicit allowance. Add NOT NULL if missing quantities must also be forbidden. CONSTRAINT alone needs a constraint name and a constraint kind, UNIQUE enforces uniqueness rather than this range, and HAVING filters query groups rather than defining column integrity."
    },
    {
      "id": "db-159",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement suppresses the '(n row(s) affected)' message after SQL statements in a stored procedure?",
      "options": [
        "SET NO COUNT",
        "SET NO COUNTING",
        "SET NO COUNTING ON",
        "SET NOCOUNT ON"
      ],
      "correct": 3,
      "explanation": "SET NOCOUNT ON suppresses the row-count completion messages normally sent after statements. It does not suppress the actual SELECT result sets or prevent the statements from affecting rows. It also does not stop @@ROWCOUNT from being updated. The alternatives split NOCOUNT into invalid keyword combinations or use nonexistent NO COUNTING syntax. This setting is commonly placed inside stored procedures to avoid unnecessary completion messages while retaining the requested data results and output parameters."
    },
    {
      "id": "db-160",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "A stored procedure receives @orderDetailID as an input parameter and returns the related @orderID as an output parameter. Choose the correct part for each step.",
      "dragItems": [
        {
          "id": "a",
          "text": "CREATE PROCEDURE uspGetOrderID"
        },
        {
          "id": "b",
          "text": "AS BEGIN"
        },
        {
          "id": "c",
          "text": "SELECT @OrderID = OrderID FROM OrderDetails WHERE OrderDetailID = @OrderDetailID"
        },
        {
          "id": "d",
          "text": "WHERE orderdetailid = @OrderDetailID"
        },
        {
          "id": "e",
          "text": "END"
        },
        {
          "id": "f",
          "text": "RETURN @OrderID"
        },
        {
          "id": "g",
          "text": "@OrderDetailID int"
        },
        {
          "id": "h",
          "text": "SELECT @orderid = orderid FROM orderdetails"
        },
        {
          "id": "i",
          "text": "@OrderDetailID int, @OrderID int OUTPUT"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "c"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "e"
        }
      ],
      "explanation": "Arrange CREATE PROCEDURE uspGetOrderID; @OrderDetailID int, @OrderID int OUTPUT; AS BEGIN; the filtered SELECT assignment; and END. The input selects the detail row, and SELECT @OrderID = OrderID assigns its order identifier to the declared output parameter. An input-only declaration would not expose that output contract. RETURN @OrderID is not a substitute for the specified output parameter because a procedure's RETURN is an integer status channel. The partial SELECT and WHERE fragments do not replace the complete selected assignment step. Callers must also use OUTPUT when collecting the parameter value."
    },
    {
      "id": "db-161",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "A clustered index is especially useful for which type of query?",
      "options": [
        "Queries that access rows randomly with no ordering",
        "Queries that never use ORDER BY or GROUP BY",
        "Queries that return a range of values",
        "Queries that always return very large result sets"
      ],
      "correct": 2,
      "explanation": "A range query is a strong use case for a clustered index when the range follows its leading key. After locating the start, the engine can traverse adjacent key entries to obtain the remaining rows. Random access on unrelated columns does not use that ordering directly. Never using ORDER BY or GROUP BY is not a benefit criterion, and always returning very large result sets is not a guarantee of efficiency. Suitability depends on the indexed key, selectivity and workload, not merely on the existence of a clustered index."
    },
    {
      "id": "db-162",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL statement is used to retrieve rows from a table? To retrieve rows from a table, use the ______ statement.",
      "options": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE"
      ],
      "correct": 0,
      "explanation": "SELECT retrieves rows from a table or another valid row source. Its projection specifies which columns or expressions to return, and optional clauses can filter, group or sort the result. INSERT adds records, UPDATE changes existing values, and DELETE removes records. These are data-changing operations rather than the ordinary retrieval statement. A SELECT does not itself mean all rows or all columns: the rest of the statement determines the requested result."
    },
    {
      "id": "db-163",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What command do you use to perform a query in SQL?",
      "options": [
        "USE",
        "SELECT",
        "QUERY",
        "CHOSE"
      ],
      "correct": 1,
      "explanation": "SELECT is the SQL statement used for an ordinary data-retrieval query. It specifies the requested expressions and normally uses FROM to name the source, with optional WHERE and other clauses. USE changes the current database context instead of retrieving table rows. QUERY and CHOSE are not the SQL Server statement keywords for this purpose. The choice concerns SQL's command vocabulary, not the natural-language meaning of the word query."
    },
    {
      "id": "db-164",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You execute a SELECT statement without an ORDER BY clause. How are the rows organized in the result set?",
      "options": [
        "In no predictable order",
        "In alphabetical order by FirstName",
        "In chronological order by DateJoined",
        "Always in the order in which the rows were inserted"
      ],
      "correct": 0,
      "explanation": "Without ORDER BY, there is no guaranteed predictable row order. The engine may scan a heap or index, use parallel processing or choose a different execution plan later. An observed alphabetical, chronological or insertion-like ordering is incidental unless explicitly requested. A clustered index does not change this result-order contract. To guarantee FirstName or DateJoined ordering, include the appropriate ORDER BY and add a tie-breaker when a fully deterministic order among equal values is required."
    },
    {
      "id": "db-165",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have a table named Employee that includes four columns. You execute the following statement Which columns are returned?",
      "code": "SELECT * FROM Employee",
      "options": [
        "all columns",
        "only the last column",
        "only the first column",
        "only the first and last columns"
      ],
      "correct": 0,
      "explanation": "SELECT * FROM Employee returns all four columns of Employee. The asterisk expands the table's columns; it does not mean only the first, last or two outermost columns. With no WHERE clause, the statement also selects every row visible to the query, subject to normal security and transaction rules. It does not guarantee the row order. For stable application interfaces, explicitly listing columns is often preferable, but that does not change what the asterisk means in this question."
    },
    {
      "id": "db-166",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A flower shop wants to see every flower ordered, but each flower should only show once. Which SQL statement will fulfill that need?",
      "options": [
        "DISTINCT",
        "UNIQUE",
        "ONLY",
        "TOP"
      ],
      "correct": 0,
      "explanation": "DISTINCT removes duplicate rows from the selected result. Selecting DISTINCT FlowerName would display each returned flower name only once. It applies to the entire selected combination, so including additional differing fields could still yield several rows for the same flower name. UNIQUE is commonly a schema constraint rather than the SQL Server SELECT modifier here. ONLY is not the needed modifier, and TOP limits the number of returned rows without necessarily removing duplicates. Deduplication and limiting are different operations."
    },
    {
      "id": "db-167",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A stored procedure contains the following query The stored procedure return all null values. You verify that there is data in the person table What is likely the cause of the problem Assume SQL Server with CONCAT_NULL_YIELDS_NULL enabled.",
      "code": "SELECT 'Greetings' + Prefix + ' ' + FirstName FROM Person;",
      "options": [
        "You must specify the NULLIF keyword in the query",
        "The plus (+) operator cannot be used to append character data",
        "The Prefix or FirstName columns have null values",
        "You must specify the join keyword in the select statement"
      ],
      "correct": 2,
      "explanation": "A NULL Prefix or FirstName explains a NULL concatenation when CONCAT_NULL_YIELDS_NULL is enabled. In 'Greetings' + Prefix + ' ' + FirstName, any NULL operand causes the complete string expression to become NULL. The plus operator does support character concatenation in SQL Server. JOIN has no role in repairing missing operand values, and NULLIF can create NULL rather than substitute a missing value. COALESCE or ISNULL can supply a replacement, or CONCAT can provide its defined NULL-as-empty-string behavior if that matches the desired output."
    },
    {
      "id": "db-168",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Evaluate the following statement. Use the FROM keyword in a SELECT statement to return rows that meet a specific condition. Instructions: Review the statement. If it makes the statement correct, select \"No change is needed.\" If the statement is incorrect, select the answer choice that makes the statement correct",
      "options": [
        "No change is needed",
        "ORDER BY",
        "UNION",
        "WHERE"
      ],
      "correct": 3,
      "explanation": "Replace FROM with WHERE. FROM identifies the source table or other row source, while WHERE filters rows according to a predicate. ORDER BY sorts the already selected result rather than choosing which rows qualify. UNION combines compatible result sets and does not stand in for a row condition. No change is needed would preserve the confusion between naming a data source and filtering its rows. A normal query can use both FROM and WHERE because they serve these different purposes."
    },
    {
      "id": "db-169",
      "chapter": "extragere-date",
      "type": "true_false",
      "question": "The AND operator is used when both conditions in a WHERE clause must be true.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "True. A WHERE predicate combined with AND qualifies a row only when both component conditions are TRUE. If one is FALSE, the conjunction is FALSE; if the result is UNKNOWN because of NULL, WHERE also does not retain that row unless the overall expression becomes TRUE. OR has a different purpose: either true condition can qualify the row. The statement describes logical truth requirements, not a promise that the engine evaluates the conditions left-to-right or short-circuits an unsafe expression."
    },
    {
      "id": "db-170",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have a database table named SongInformation as defined below: You need to create a Structured Query Language (SQL) query to retrieve only the names of songs that sold more than 1000 compact discs (CDs). Which query should you use?",
      "image": "assets/databasesimg/q044_1.png",
      "options": [
        "SELECT Name FROM SongInformation WHERE CDsSold > 1000",
        "SELECT Name FROM CDsSold WHERE CDsSold > 1000",
        "SELECT FROM SongInformation WHERE CDsSold > 1000",
        "SELECT * FROM SongInformation"
      ],
      "correct": 0,
      "explanation": "SELECT Name FROM SongInformation WHERE CDsSold > 1000 uses the table and columns shown in the schema and returns only the requested song names. The strict greater-than predicate excludes exactly 1000 CDs sold. FROM CDsSold incorrectly treats a column as the source table. SELECT FROM omits the required selected expression, and SELECT * FROM SongInformation returns all columns and has no sales filter. A NULL CDsSold value would not satisfy the comparison and would therefore not appear."
    },
    {
      "id": "db-171",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query correctly returns all orders where Ship_State excludes Texas (TX) and Arizona (AZ)?",
      "options": [
        "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' AND NOT Ship_State = 'AZ';",
        "SELECT * FROM Orders WHERE NOT Ship_State = 'TX' OR NOT Ship_State = 'AZ';",
        "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' AND Ship_State NOT = 'AZ';",
        "SELECT * FROM Orders WHERE Ship_State NOT = 'TX' OR Ship_State NOT = 'AZ';"
      ],
      "correct": 0,
      "explanation": "Use NOT Ship_State = 'TX' AND NOT Ship_State = 'AZ'. Both exclusions must hold, which is equivalent to Ship_State NOT IN ('TX','AZ') for these non-NULL constants. OR would admit almost every non-NULL state: a Texas value is not Arizona, and an Arizona value is not Texas. The forms Ship_State NOT = ... are not valid T-SQL comparison syntax. NULL state values do not satisfy either ordinary inequality; include an explicit IS NULL branch if the intended business rule is to keep unknown states too."
    },
    {
      "id": "db-172",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have the Cars table shown below. How many rows are returned by the following SQL query?",
      "code": "SELECT *\nFROM Cars AS c\nWHERE c.Origin <> 'USA'\n  AND c.Color <> 'Black';",
      "image": "assets/databases/pdf-074-cars.png",
      "options": [
        "4",
        "5",
        "6",
        "7"
      ],
      "correct": 0,
      "explanation": "Four rows qualify: Sedan (Red, Japan), Minivan (Silver, Japan), Hatchback (Red, Japan) and SUV (Silver, Germany). Truck is excluded because its origin is USA. Compact and Hybrid are excluded because their color is Black, while Convertible fails both exclusions. AND requires the origin and color conditions to be satisfied simultaneously; counting every non-USA car without checking color would overcount. The listed alternatives five, six and seven therefore do not follow the actual predicate applied to the eight displayed rows.",
      "imageAlt": "cars"
    },
    {
      "id": "db-173",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The Product table contains the data shown below. How many rows are returned by the following query?",
      "code": "SELECT Name\nFROM Product\nWHERE Quantity IS NOT NULL;",
      "image": "assets/databasesimg/q047_1.png",
      "options": [
        "0",
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 3,
      "explanation": "Three rows are returned: Apples with quantity 33, Oranges with quantity 0 and Pears with quantity 29. The blank quantity for Plums represents NULL in the table context and fails IS NOT NULL. Zero is a stored numeric value, not missing data, so Oranges must be counted. The query returns the three names rather than a single count value, but the question asks how many rows are in that result. Neither truthiness nor positive-quantity filtering is part of this predicate."
    },
    {
      "id": "db-174",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A sales manager wants to see all customers with sales of at least 50000 who either reside in Los Angeles, California, or in the states of Nevada or Arizona. Which SQL statement will satisfy the request?",
      "options": [
        "SELECT LastName, FirstName FROM Customers WHERE Sales >= 50000 OR ((City = 'Los Angeles' AND State = 'California') OR State IN ('Nevada','Arizona'));",
        "SELECT LastName, FirstName FROM Customers WHERE Sales > 50000 AND ((City = 'Los Angeles' AND State = 'California') OR State IN ('Nevada','Arizona'));",
        "SELECT LastName, FirstName FROM Customers WHERE Sales >= 50000 AND ((City = 'Los Angeles' AND State = 'California') OR State IN ('Nevada','Arizona'));",
        "SELECT LastName, FirstName FROM Customers WHERE Sales > 50000 OR ((City = 'Los Angeles' AND State = 'California') AND State IN ('Nevada','Arizona'));"
      ],
      "correct": 2,
      "explanation": "Choose the third query. Sales >= 50000 includes the threshold itself, and AND requires that sales test in addition to the grouped location condition. The location group permits Los Angeles only when the state is California, or any customer in Nevada or Arizona. The first query uses OR with the sales test and admits customers meeting only one side. The second uses > and wrongly excludes exactly 50000. The fourth combines the wrong threshold and incompatible location logic. Parentheses keep the geographic alternatives together under the sales requirement."
    },
    {
      "id": "db-175",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What clause would you use with the SELECT command that would pull records based on a range?",
      "options": [
        "BETWEEN",
        "LIKE",
        "DISTINCT",
        "UNION"
      ],
      "correct": 0,
      "explanation": "BETWEEN expresses an inclusive range, for example Price BETWEEN 10 AND 20 includes both 10 and 20. LIKE matches character patterns, DISTINCT removes duplicate selected rows, and UNION combines result sets. Those operations do not supply the direct lower-and-upper-bound condition requested. Although the question calls it a clause, BETWEEN is normally used as a predicate within WHERE. For date/time ranges, consider whether an inclusive upper bound includes the intended times; a half-open range is often clearer for complete calendar periods."
    },
    {
      "id": "db-176",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You are writing a select statement to find every product whose name contains a specific character. Which keyword should you use in your where clause?",
      "options": [
        "LIKE",
        "IN",
        "BETWEEN",
        "ALL"
      ],
      "correct": 0,
      "explanation": "LIKE performs pattern matching, so a condition such as ProductName LIKE '%x%' finds names containing x anywhere. The percent wildcards allow any surrounding characters; an underscore would represent a single character. IN tests membership in a set of specified values, BETWEEN tests a range, and ALL compares against every value from a subquery rather than searching within a string. Whether differently cased or accented characters match depends on the applicable collation, not solely on the LIKE keyword."
    },
    {
      "id": "db-177",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The products table contains the following data Which query will retrieve ItemName and Price when chocolate appears in the ItemDescription column? Assume a case-insensitive collation for this pattern match.",
      "image": "assets/databases/pdf-080-products.png",
      "options": [
        "SELECT ItemName, Price FROM Products Where ItemDescription = 'chocolate';",
        "SELECT ItemName, Price FROM Products WHERE ItemDescription LIKE '%chocolate%';",
        "SELECT ItemName, Price FROM Products WHERE ItemDEscription LIKE 'chocolate';",
        "SELECT ItemName, Price FROM Products WHERE ItemDescription IN '%chocolate%';"
      ],
      "correct": 1,
      "explanation": "Use SELECT ItemName, Price FROM Products WHERE ItemDescription LIKE '%chocolate%'. The surrounding percent wildcards allow the target text anywhere inside the longer descriptions shown, such as the Brownie Mini Bites and Cappuccino descriptions. Equality or LIKE 'chocolate' without wildcards requires the whole value to match that text rather than contain it. IN is a membership predicate and does not interpret this wildcard expression as a substring search. Matching lowercase chocolate to the capitalized examples depends on a case-insensitive collation, which the clarified stem now makes explicit.",
      "imageAlt": "products"
    },
    {
      "id": "db-178",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query returns orders with Order_Date strictly greater than January 1, 2017, and a non-NULL state other than California (CA)?",
      "options": [
        "SELECT * FROM Orders WHERE Order_Date > '2017-01-01' AND Ship_State <> 'CA';",
        "SELECT * FROM Orders WHERE Order_Date > '2017-01-01' OR Ship_State <> 'CA';",
        "SELECT * FROM Orders WHERE Order_Date = '2017-01-01' AND Ship_State LIKE 'CA';",
        "SELECT * FROM Orders WHERE Order_Date > '2017-01-01' OR Ship_State LIKE 'CA';"
      ],
      "correct": 0,
      "explanation": "The first query combines Order_Date > '2017-01-01' with Ship_State <> 'CA' using AND. It requires both a strictly later stored date/time value and a known state that is not California. OR would admit rows satisfying only one requirement. Equality to the cutoff and LIKE 'CA' express different conditions entirely. NULL state values are excluded because comparison with NULL is UNKNOWN. If Order_Date includes a time component, greater than this literal means after midnight at the start of January 1, not automatically after the entire calendar day."
    },
    {
      "id": "db-179",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You need to list the name and price of each product, sorted by price from highest to lowest. Which statement should you use?",
      "options": [
        "SELECT Name, Price FROM Product ORDER BY Price DESC",
        "SELECT Name, Price FROM Product ORDER BY Price ASC",
        "SELECT Name, BOTTOM Price FROM Product",
        "SELECT Name, TOP Price FROM Product"
      ],
      "correct": 0,
      "explanation": "ORDER BY Price DESC sorts the selected name/price rows from highest price to lowest. ASC reverses that order. TOP and BOTTOM are not prefixes that can be inserted before Price in the SELECT list to express this sorting requirement; SQL Server TOP limits rows and still needs ordering to identify the highest ones. Equal prices have no guaranteed relative order unless an additional sort key is supplied. Selecting only Name and Price satisfies the required projection without changing stored product data."
    },
    {
      "id": "db-180",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to display customers from Utah, sorted by last name.",
      "dragItems": [
        {
          "id": "a",
          "text": "ORDER BY"
        },
        {
          "id": "b",
          "text": "HAVING"
        },
        {
          "id": "c",
          "text": "WHEN"
        },
        {
          "id": "d",
          "text": "SORT BY"
        },
        {
          "id": "e",
          "text": "WHERE"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT lastname, firstname FROM customers ______ state = 'UT'",
          "correctItemId": "e"
        },
        {
          "id": "z2",
          "label": "______ lastname",
          "correctItemId": "a"
        }
      ],
      "explanation": "Use WHERE state = 'UT', followed by ORDER BY lastname. WHERE restricts individual customer rows to Utah before the result is ordered. ORDER BY is the SQL Server result-sorting clause, with ascending order used by default. HAVING filters groups rather than serving as the ordinary row filter here, WHEN belongs to other expressions or control structures, and SORT BY is not this T-SQL clause. Both blanks serve different purposes: filtering selects the rows, while sorting determines their output sequence."
    },
    {
      "id": "db-181",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to return LastName, PhoneNumber, and Extension only for customers whose Extension has a value (is not NULL). Sort the result by LastName.",
      "code": "SELECT LastName, PhoneNumber, Extension\nFROM Customers\nWHERE [Blank 1] [Blank 2]\n[Blank 3] LastName;",
      "dragItems": [
        {
          "id": "a",
          "text": "HAVING"
        },
        {
          "id": "b",
          "text": "SORT BY"
        },
        {
          "id": "c",
          "text": "ORDER BY"
        },
        {
          "id": "d",
          "text": "= NULL"
        },
        {
          "id": "e",
          "text": "ID"
        },
        {
          "id": "f",
          "text": "IS NOT NULL"
        },
        {
          "id": "g",
          "text": "LastName"
        },
        {
          "id": "h",
          "text": "Extension"
        },
        {
          "id": "i",
          "text": "PhoneNumber"
        },
        {
          "id": "j",
          "text": "IS VALID"
        },
        {
          "id": "k",
          "text": "GROUP BY"
        },
        {
          "id": "l",
          "text": "IS NULL"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank 1 — column to test",
          "correctItemId": "h"
        },
        {
          "id": "z2",
          "label": "Blank 2 — condition for existing values",
          "correctItemId": "f"
        },
        {
          "id": "z3",
          "label": "Blank 3 — sorting clause",
          "correctItemId": "c"
        }
      ],
      "explanation": "Fill the blanks with Extension, IS NOT NULL and ORDER BY. The resulting predicate tests the specific field whose presence matters, and the final clause sorts by LastName. In the image, Minnie Hemingway with 77 and Mickey Sassafras with 12 qualify; the three NULL extension rows do not. = NULL never provides the intended standard NULL test. IS NULL selects the opposite group, while checking ID, LastName or PhoneNumber tests the wrong attribute. GROUP BY aggregates/groups rows, HAVING filters groups, and SORT BY and IS VALID are not the required T-SQL syntax.",
      "image": "assets/databases/pdf-054-customer-extension.png",
      "imageAlt": "customer extension"
    },
    {
      "id": "db-182",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete a SQL Server query for flights arriving at LGA later today, latest arrival first. Flight may contain dates other than today.",
      "image": "assets/databases/pdf-083-flight.png",
      "dragItems": [
        {
          "id": "i1",
          "text": "AND"
        },
        {
          "id": "i2",
          "text": "OR"
        },
        {
          "id": "i3",
          "text": ">"
        },
        {
          "id": "i4",
          "text": "<"
        },
        {
          "id": "i5",
          "text": "ORDER BY"
        },
        {
          "id": "i6",
          "text": "GROUP BY"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Blank [1]",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Blank [2]",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Blank [3]",
          "correctItemId": "i5"
        }
      ],
      "explanation": "The blanks are AND, > and ORDER BY. The first two require both DestinationAirport = 'LGA' and an ArrivalTime later than the current server time. The supplied upper bound excludes tomorrow and all later dates, which is essential because Flight contains dates beyond today. ORDER BY ArrivalTime DESC puts the latest qualifying arrival first. OR would admit flights failing one requirement, < would choose earlier arrivals, and GROUP BY would not sort the result. GETDATE and the day boundary are interpreted in the SQL Server environment's time context.",
      "code": "SELECT FlightNumber FROM Flight\nWHERE DestinationAirport='LGA' [1] ArrivalTime [2] GETDATE()\nAND ArrivalTime < DATEADD(day,1,CAST(GETDATE() AS date))\n[3] ArrivalTime DESC;",
      "imageAlt": "flight"
    },
    {
      "id": "db-183",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A report must include students who enrolled on or after June 1, 2020 OR students who graduated during calendar year 2020. Sort by Enrollment_Date from newest to oldest. Which query is correct?",
      "options": [
        "SELECT * FROM Student WHERE Enrollment_Date >= '2020-06-01' OR (Academic_Status = 'Graduated' AND Graduation_Date >= '2020-01-01' AND Graduation_Date < '2021-01-01') ORDER BY Enrollment_Date DESC;",
        "SELECT * FROM Student WHERE Enrollment_Date >= '2020-06-01' AND Academic_Status = 'Graduated' AND Graduation_Date >= '2020-01-01' ORDER BY Enrollment_Date ASC;",
        "SELECT * FROM Student WHERE Enrollment_Date >= '2020-06-01' OR Graduation_Date >= '2020-01-01' ORDER BY Enrollment_Date ASC;",
        "SELECT * FROM Student WHERE Academic_Status = 'Graduated' AND Graduation_Date < '2020-01-01' ORDER BY Enrollment_Date DESC;"
      ],
      "correct": 0,
      "explanation": "The first query exactly expresses the two alternative eligibility paths with OR: enrolled on or after June 1, 2020, or graduated with a graduation timestamp in [2020-01-01, 2021-01-01). The half-open end handles all times on December 31. ORDER BY Enrollment_Date DESC puts newest enrollment first. The second query incorrectly requires both paths and sorts ascending. The third lacks the graduation-status and year-end restrictions and also sorts ascending. The fourth excludes the requested graduation year and ignores the enrollment alternative."
    },
    {
      "id": "db-184",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to display the addresses of the earliest 10 buildings that have been inspected.",
      "image": "assets/databases/pdf-055-building.png",
      "dragItems": [
        {
          "id": "a",
          "text": "IS NOT NULL"
        },
        {
          "id": "b",
          "text": "HAVING"
        },
        {
          "id": "c",
          "text": "GROUP BY 10"
        },
        {
          "id": "d",
          "text": "COUNT"
        },
        {
          "id": "e",
          "text": "ORDER BY"
        },
        {
          "id": "f",
          "text": "IS NULL"
        },
        {
          "id": "g",
          "text": "TOP 10"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT ______ Address",
          "correctItemId": "g"
        },
        {
          "id": "z2",
          "label": "WHERE InspectionDate ______",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "______ InspectionDate",
          "correctItemId": "e"
        }
      ],
      "explanation": "Choose TOP 10, IS NOT NULL and ORDER BY. These produce the first ten addresses after excluding uninspected buildings and sorting InspectionDate ascending, which is the default. IS NULL would select buildings without an inspection date. COUNT would aggregate rather than return the requested addresses, and GROUP BY is not the ordering operation. The complete source remains Building as specified by the schema. If several buildings have equal inspection timestamps near the tenth position, an additional key such as BuildingID is needed for a deterministic tie-breaker.",
      "imageAlt": "building"
    },
    {
      "id": "db-185",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL function returns the total sum of values in a numeric column?",
      "options": [
        "SUM()",
        "COUNT()",
        "AVG()",
        "MAX()"
      ],
      "correct": 0,
      "explanation": "SUM() adds the non-NULL numeric values in the chosen column. COUNT() measures how many rows or non-NULL expressions are present, AVG() divides a total by the number of non-NULL values, and MAX() returns the greatest value rather than the total. A WHERE filter can restrict which rows contribute to the sum, and GROUP BY can produce a sum per group. If there are no contributing values, SUM normally returns NULL rather than zero; use an explicit replacement when a zero result is required."
    },
    {
      "id": "db-186",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which function returns the average value from a column? To return the arithmetic mean of a numeric column, use ______.",
      "options": [
        "AVG()",
        "SUM()",
        "COUNT()",
        "MIN()"
      ],
      "correct": 0,
      "explanation": "AVG() returns the arithmetic mean of the non-NULL values: their total divided by their count. SUM() supplies only the total, COUNT() supplies the number of entries, and MIN() supplies the smallest value. NULL values are ignored rather than treated as zero. Result data types matter: SQL Server AVG over an INT expression returns an integer result, so cast to a suitable exact decimal type if fractional precision is required. The function name is AVG, not an invented AVERAGE keyword."
    },
    {
      "id": "db-187",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Evaluate the Employee table. What value is returned by the query below?",
      "code": "-- Employee salaries: Gomez 83000, Parker 38000, Smith 70000, Tang 68000\nSELECT MAX(Salary) FROM Employee;",
      "options": [
        "83000",
        "1",
        "Gomez",
        "38000"
      ],
      "correct": 0,
      "explanation": "MAX(Salary) returns 83000, the largest of 83000, 38000, 70000 and 68000. It returns a salary value, not Gomez's name or the identifier 1 of the corresponding employee. Selecting the person associated with the maximum would require another query structure. The alternative 38000 is the minimum of the displayed salaries, not the maximum. Because this aggregate has no GROUP BY, it produces one aggregate result for the whole visible Employee set rather than one row per employee."
    },
    {
      "id": "db-188",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL statement returns each City together with its number of customers?",
      "options": [
        "SELECT City, COUNT(*) FROM Customers;",
        "SELECT City FROM Customers GROUP BY COUNT(*);",
        "SELECT COUNT(*) FROM Customers GROUP BY City;",
        "SELECT City, COUNT(*) FROM Customers GROUP BY City;"
      ],
      "correct": 3,
      "explanation": "Use SELECT City, COUNT(*) FROM Customers GROUP BY City. GROUP BY forms one group per city and COUNT(*) counts all rows in that group, while City identifies the group in the output. Selecting City beside an aggregate without grouping it is invalid in SQL Server. Grouping by COUNT(*) is not a valid way to form city groups. The count-only alternative can compute a count per city but omits the City output explicitly required by the clarified question. No ORDER BY is present, so city order is not guaranteed."
    },
    {
      "id": "db-189",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have a table named Employee that includes the following columns: EmployeeID, Emp1oyeeName. Which statement should you use to return the number of rows in the table?",
      "options": [
        "SELECT * FROM Employee",
        "SELECT SUM(*) FROM Employee",
        "SELECT COUNT (rows) FROM Employee",
        "SELECT COUNT(*) FROM Employee"
      ],
      "correct": 3,
      "explanation": "SELECT COUNT(*) FROM Employee returns the total number of visible employee rows. The asterisk inside COUNT means count rows, including rows with NULL in one or more ordinary columns. SELECT * returns the actual records instead of a count. SUM(*) is not a valid all-row total expression, and COUNT(rows) would refer to an expression or column named rows that the schema has not defined. The query produces one aggregate value rather than one result per EmployeeID."
    },
    {
      "id": "db-190",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The Product table contains the following data. You execute the following statement What is the value returned by this statement?",
      "code": "SELECT COUNT(*) FROM Product WHERE Quantity > 18",
      "image": "assets/databasesimg/q064_1.png",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correct": 2,
      "explanation": "The result is 3. Quantities 33 (Spoon), 20 (Plate) and 51 (Cup) each satisfy Quantity > 18; 17 (Fork) does not. COUNT(*) counts the rows remaining after WHERE, not the sum of their quantities and not all four original records. The strict greater-than operator would exclude an exact value of 18 as well, although none is shown. The query returns one row containing the count 3, which is distinct from saying that its own result set contains three rows."
    },
    {
      "id": "db-191",
      "chapter": "extragere-date",
      "type": "single",
      "question": "ID identifies an order and can repeat across line items. Which query returns the distinct order count, average line total, maximum line total and grand total?",
      "image": "assets/databases/pdf-057-items-on-order.png",
      "options": [
        "SELECT COUNT(DISTINCT ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder;",
        "SELECT COUNT(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder;",
        "SELECT SUM(ID), AVG(LineItemTotal), MAX(LineItemTotal), SUM(LineItemTotal) FROM ItemsOnOrder;"
      ],
      "correct": 0,
      "explanation": "The first query uses COUNT(DISTINCT ID) to count orders rather than line items, then AVG, MAX and SUM over LineItemTotal. In the image the order IDs are 100, 100, 100, 101 and 102, so the distinct order count is 3 rather than 5. The five shown line totals sum to 1672.00, giving an average of 334.40 and maximum of 499.75. COUNT(ID) counts all five non-NULL line identifiers; SUM(ID) adds arbitrary identifiers and is not an order count. These aggregates summarize the supplied LineItemTotal values directly.",
      "imageAlt": "items on order"
    },
    {
      "id": "db-192",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to display total points per player for TeamID = 1.",
      "dragItems": [
        {
          "id": "a",
          "text": "COUNT"
        },
        {
          "id": "b",
          "text": "HAVING"
        },
        {
          "id": "c",
          "text": "GROUP BY"
        },
        {
          "id": "d",
          "text": "WHERE"
        },
        {
          "id": "e",
          "text": "PlayerID"
        },
        {
          "id": "f",
          "text": "SUM(Points)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT PlayerID, ______",
          "correctItemId": "f"
        },
        {
          "id": "z2",
          "label": "______ TeamID = 1",
          "correctItemId": "d"
        },
        {
          "id": "z3",
          "label": "______ PlayerID",
          "correctItemId": "c"
        }
      ],
      "explanation": "Use SUM(Points), WHERE and GROUP BY in that order. WHERE TeamID = 1 first restricts the input games/stat rows to the required team. GROUP BY PlayerID forms one group per player, and SUM(Points) totals the non-NULL point values within each group. COUNT would measure occurrences rather than total scores. HAVING is for filtering aggregate groups and is not the ordinary pre-aggregation team filter. The displayed nullable Points column means missing scores do not contribute to SUM, rather than automatically counting as known zeroes.",
      "image": "assets/databases/pdf-056-player-stat.png",
      "imageAlt": "player stat"
    },
    {
      "id": "db-193",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which clause groups rows by ProductName so SUM(Amount) can calculate total sales for each product?",
      "options": [
        "GROUP BY",
        "ORDER BY",
        "WHERE",
        "HAVING"
      ],
      "correct": 0,
      "explanation": "GROUP BY ProductName creates one group for each product name so SUM(Amount) can compute the total within each group. ORDER BY sorts the resulting rows and does not itself combine them. WHERE filters individual input rows before aggregation. HAVING filters groups after aggregate values have been computed. Products with the same name will be combined by this grouping even if they have different identifiers; grouping by a stable product key as well may be needed in a real design, but it is not the clause distinction asked here."
    },
    {
      "id": "db-194",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does this query return? SELECT Department, COUNT(*) FROM Employees GROUP BY Department HAVING COUNT(*) > 5;",
      "options": [
        "Departments with more than 5 employees",
        "All employees in each department",
        "Only departments that have exactly 5 employees",
        "An error, because HAVING can't be used with COUNT()"
      ],
      "correct": 0,
      "explanation": "The query returns departments with more than five employee rows, together with their counts. GROUP BY Department first forms department groups and COUNT(*) measures each group. HAVING COUNT(*) > 5 then excludes groups of five or fewer employees. It does not return every individual employee or only exactly-five departments. COUNT is valid in HAVING, so the error alternative is incorrect. Departments with no employee rows cannot be introduced by querying Employees alone; a separate Department source would be needed to include them."
    },
    {
      "id": "db-195",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL statement will return the country and number of orders in each country where the number of orders is less than 50? OrderID represent an individual order, Country represent the country, and Orders represents the number of orders.",
      "options": [
        "SELECT COUNT (OrderId), Country FROM Orders HAVING COUNT(OrderId) < 50; GROUP BY Country",
        "SELECT Country, OrderId FROM Orders GROUP BY Country WHERE COUNT(OrderId) < 50;",
        "SELECT COUNT (OrderId), Country FROM Orders GROUP BY Country HAVING COUNT(OrderId) < 50;",
        "SELECT Country, OrderId FROM Orders WHERE Count(OrderId) < 50; GROUP BY Country"
      ],
      "correct": 2,
      "explanation": "The third statement has the correct order: SELECT, FROM, GROUP BY Country, then HAVING COUNT(OrderId) < 50. It returns the country label and the count of its non-NULL order identifiers. The first places HAVING before GROUP BY and terminates the statement prematurely. The second and fourth improperly use an aggregate in WHERE and fail to select/group the needed expressions correctly. When OrderId is the non-NULL identifier for each order, its count equals the number of orders; nullable identifiers would change that interpretation."
    },
    {
      "id": "db-196",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You want to determine whether 'Sample Movie' appears only once in the Movie table. The query below returns a syntax error. What should you change so the query runs correctly?",
      "code": "SELECT Title\nFROM Movie\nWHERE Title = 'Sample Movie'\nORDER BY Title\nGROUP BY Title\nHAVING COUNT(*) = 1;",
      "options": [
        "Remove the GROUP BY clause",
        "Change HAVING to HAVING COUNT(Title) = 1",
        "Remove the ORDER BY clause",
        "Change HAVING to HAVING COUNT(1) = 1"
      ],
      "correct": 2,
      "explanation": "Remove ORDER BY, the third choice. In the displayed statement it appears before GROUP BY and HAVING, which violates SQL clause order. Removing that line leaves a valid query grouping the filtered title and keeping only a group with COUNT(*) = 1. Alternatively, ORDER BY could be moved to the end, but that repair is not offered. Changing COUNT(*) to COUNT(Title) or COUNT(1) does not fix clause placement. Removing GROUP BY while selecting the unaggregated Title also fails to provide the intended valid aggregate query."
    },
    {
      "id": "db-197",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You need to display the customer name together with the OrderID. The data is stored in the two tables shown below. Which SQL operation should you use to combine columns from both tables?",
      "code": "Customers: CustomerID (PK), CustomerName\n\nOrders: OrderID (PK), CustomerID (FK)",
      "options": [
        "AND",
        "BETWEEN",
        "JOIN",
        "COMBINE"
      ],
      "correct": 2,
      "explanation": "JOIN combines related columns from Customers and Orders, normally using CustomerID as the equality condition. A typical INNER JOIN produces a row for each matching customer/order association. AND combines Boolean conditions, and BETWEEN tests a range; neither introduces another table's columns as a relational source. COMBINE is not the SQL Server join keyword. If customers without orders must also appear, the join type would need to preserve them explicitly, but this question asks for the operation used to combine the two tables."
    },
    {
      "id": "db-198",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A Students table contains CourseID as a foreign key to Courses.CourseID. Which query correctly returns the student name and course name where CourseID matches?",
      "options": [
        "SELECT students.name, courses.name FROM students INNER JOIN courses WHERE students.courseID = courses.courseID",
        "SELECT students.name, courses.name FROM students INNER JOIN courses ON students.courseID = courses.courseID",
        "SELECT students.name, courses.name FROM students INNER JOIN ON students.courseID = courses.courseID",
        "SELECT students.name, courses.name FROM students INNER JOIN ON courses WHERE students.courseID = courses.courseID"
      ],
      "correct": 1,
      "explanation": "The second query correctly places both tables after SELECT/FROM and INNER JOIN, followed by ON students.courseID = courses.courseID. ON specifies which row pairs match. In SQL Server an explicit INNER JOIN cannot replace its ON clause with the offered WHERE form, and the other alternatives omit the joined table or put ON in the wrong position. The query returns only matched student/course rows. A student with a NULL course reference does not match through ordinary equality and would need an outer join to remain visible."
    },
    {
      "id": "db-199",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Return each enrolled student’s first and last name and the course name from student, enrollment and course. Which query is correct?",
      "image": "assets/databases/pdf-075-student-enrollment-course.png",
      "options": [
        "SELECT s.firstName,s.lastName,c.name FROM course c INNER JOIN enrollment e ON e.courseId=c.courseId INNER JOIN student s ON e.studentId=s.studentID;",
        "SELECT s.firstName,s.lastName,c.name FROM student s CROSS JOIN course c;",
        "SELECT s.firstName,s.lastName,c.name FROM student s JOIN course c ON s.studentID=c.courseId;"
      ],
      "correct": 0,
      "explanation": "The first query follows the diagram's two relationships: enrollment.courseId matches course.courseId, and enrollment.studentId matches student.studentID. The inner joins return one result for each matching enrollment and include the student's names with the associated course name. A CROSS JOIN pairs students with all courses regardless of enrollment. Joining studentID directly to courseId compares unrelated identifiers and ignores the junction table. Students with no enrollment are correctly absent. Multiple enrollments can legitimately repeat a student's name in separate result rows.",
      "imageAlt": "student enrollment course"
    },
    {
      "id": "db-200",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have two tables named Cars and Colors as defined below. The two tables are related by ColorId. You run the following SQL statement: SELECT * FROM Cars LEFT OUTER JOIN Colors ON Cars.ColorID = Colors. ColorID How many rows does the SQL statement return?",
      "code": "SELECT *\nFROM Cars\nLEFT OUTER JOIN Colors\n  ON Cars.ColorID = Colors.ColorID;",
      "image": "assets/databases/pdf-061-cars-colors.png",
      "options": [
        "0",
        "2",
        "3",
        "6"
      ],
      "correct": 2,
      "explanation": "The LEFT OUTER JOIN returns three rows. Sedan matches ColorID 2 (Gold), Minivan matches ColorID 1 (Red), and Truck remains even though its ColorID is NULL, with NULL in the right-side color fields. The two Colors rows do not multiply every car because the ON condition requires equal identifiers. An inner join would return only the two matches, and a Cartesian product would produce six rows. The displayed unique ColorIDs ensure that each matching car contributes only one row here.",
      "imageAlt": "cars colors"
    },
    {
      "id": "db-201",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have Customer and Orders tables. The result must include all customers and their orders, including customers who have no orders, without adding unmatched order rows. Which join should you use if Customer is the left table?",
      "options": [
        "CROSS JOIN",
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "FULL OUTER JOIN"
      ],
      "correct": 2,
      "explanation": "LEFT OUTER JOIN preserves every Customer row and adds matching orders. Customers with no orders receive NULL values for the Orders columns. INNER JOIN would omit those customers. CROSS JOIN creates every possible customer/order pairing regardless of relationship. FULL OUTER JOIN would also preserve unmatched order rows, which the clarified requirement excludes. A customer with several orders may produce several rows; preserving all customers is not the same as returning exactly one row per customer. The left-table position stated in the question determines which outer-join direction is needed."
    },
    {
      "id": "db-202",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You have two tables. Each table has three rows. How many rows will be included in the Cartesian product of these two tables?",
      "options": [
        "0",
        "3",
        "6",
        "9"
      ],
      "correct": 3,
      "explanation": "The Cartesian product contains 3 × 3 = 9 rows. Every row from the first table is paired with every row from the second, so the counts multiply rather than add. Three would require only one match per first-table row, which is not what an unrestricted product does. Six is the sum of the source counts, not their pairing count. Zero would occur if either input had no rows, but both inputs explicitly contain three. No relationship predicate is applied in a Cartesian product."
    },
    {
      "id": "db-203",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You execute the following statement This type of operation is called a/an:",
      "code": "SELECT EmployeeID, FirstName, DepartmentName FROM Employee, Department;",
      "options": [
        "Intersection",
        "Outer join",
        "Equi-join",
        "Cartesian product"
      ],
      "correct": 3,
      "explanation": "This is a Cartesian product because Employee and Department appear as comma-separated sources without a joining condition. Every employee row is paired with every department row, so the row count is the product of the two source counts. An equi-join would require an equality condition connecting their related keys. An outer join would specify preservation of unmatched records, and intersection is a set operation selecting common result rows. Choosing columns from both tables does not by itself establish which employee belongs to which department."
    },
    {
      "id": "db-204",
      "chapter": "extragere-date",
      "type": "drag_drop",
      "question": "Match each set operator to its result.",
      "dragItems": [
        {
          "id": "a",
          "text": "UNION"
        },
        {
          "id": "b",
          "text": "INTERSECT"
        },
        {
          "id": "c",
          "text": "EXCEPT"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Combines rows from both result sets and removes duplicates",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "Returns only rows that appear in both result sets",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Returns rows from the first result set that are not in the second",
          "correctItemId": "c"
        }
      ],
      "explanation": "UNION combines compatible result sets and removes duplicate complete result rows. INTERSECT returns distinct rows common to both inputs. EXCEPT returns distinct rows in the first input that are absent from the second; reversing the inputs can change that result. These are vertical set operations over compatible projections, not joins that add columns from related tables. UNION ALL would preserve duplicates but is not the supplied UNION choice. In these set operations, NULLs are treated as equal for duplicate/set comparison purposes, unlike ordinary equality predicates."
    },
    {
      "id": "db-205",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which SQL set operator returns rows from the first result set that do not appear in the second result set?",
      "options": [
        "EXCEPT",
        "INTERSECT",
        "SEARCH",
        "EXCLUDE"
      ],
      "correct": 0,
      "explanation": "EXCEPT returns distinct rows from its first query result that are not present in its second. INTERSECT returns the common rows instead, so it answers the opposite kind of membership question. SEARCH and EXCLUDE are not the SQL Server set-operator keywords offered for this task. The selected queries must have compatible column counts and types. Order matters for EXCEPT: A EXCEPT B need not equal B EXCEPT A. A join can express related differences too, but it is not the direct set operator requested."
    },
    {
      "id": "db-206",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The SQL _________ operator takes the results of two queries and returns only rows that appear in both result sets.",
      "options": [
        "UNION",
        "INTERSECT",
        "EXCEPT",
        "JOIN"
      ],
      "correct": 1,
      "explanation": "INTERSECT returns distinct rows that occur in both compatible query results. UNION returns the combined distinct rows from either input rather than only the overlap. EXCEPT removes the second input's rows from the first. JOIN combines columns according to a row-pairing predicate and does not mean set intersection of identically shaped result rows. The comparison concerns whole projected rows, not merely values in one arbitrarily chosen column. SQL Server's INTERSECT removes duplicate overlap rows rather than returning all their multiplicities."
    },
    {
      "id": "db-207",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You execute the following statement This statement is an example of a/an:",
      "code": "SELECT DepartmentName FROM Department WHERE DepartmentID = (SELECT DepartmentID FROM Employee WHERE EmployeeID = 1234)",
      "options": [
        "subquery",
        "view",
        "trigger",
        "index"
      ],
      "correct": 0,
      "explanation": "The parenthesized SELECT inside the outer WHERE clause is a subquery. It looks up EmployeeID 1234's DepartmentID and uses that value to find the department name. A view, trigger or index would require a separate object definition; none is created by this statement. Because the operator is scalar equality, the subquery must return at most one value or SQL Server raises an error. If it returns no row, the scalar result is NULL and ordinary equality does not produce a match. A unique EmployeeID makes the intended lookup well-defined."
    },
    {
      "id": "db-208",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does the following code return?",
      "code": "SELECT DepartmentName FROM Department WHERE DepartmentID = ANY ( SELECT DepartmentID FROM Employee WHERE JobTitle = 'Manager' );",
      "options": [
        "Returns the names of departments that have at least one employee with the job title 'Manager'",
        "Returns all employee names with the job title 'Manager'",
        "Returns departments where all employees are managers",
        "Returns departments with more than one manager"
      ],
      "correct": 0,
      "explanation": "The query returns department names whose DepartmentID equals at least one value returned for employees with JobTitle = 'Manager'. = ANY therefore acts like membership in the subquery's returned department IDs. It does not select employee names, require every employee to be a manager, or require two managers in a department. Multiple manager rows in one department do not multiply an outer department row because this is a comparison predicate rather than a join. NULL subquery values do not themselves create a TRUE equality match."
    },
    {
      "id": "db-209",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does the following code return?",
      "code": "SELECT EmployeeName FROM Employee WHERE Salary > ALL ( SELECT Salary FROM Employee WHERE DepartmentID = 5 );",
      "options": [
        "Employees with the highest salary in the company",
        "Employees whose salary is higher than all employees in department 5",
        "All employees from department 5",
        "Employees with the same salary as everyone in department 5"
      ],
      "correct": 1,
      "explanation": "The intended result is employees whose salary exceeds every salary returned for department 5. It does not necessarily identify the highest-paid people in the whole company or restrict the outer employees to department 5. The equality option is also wrong because the operator is >. SQL NULL and empty-set behavior matter: a NULL salary in the subquery can prevent the universal comparison from being TRUE, while an empty subquery makes > ALL true for the universal test. The ordinary reading assumes the compared department salaries are present, not silently replaced with zero."
    },
    {
      "id": "db-210",
      "chapter": "extragere-date",
      "type": "single",
      "question": "An inventory report must list every product with every location, even when there is no relationship between them. Which join should be used?",
      "options": [
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "CROSS JOIN",
        "FULL OUTER JOIN"
      ],
      "correct": 2,
      "explanation": "Use CROSS JOIN. It pairs every product with every location, producing product_count × location_count rows even when no relationship exists between the entities. INNER JOIN requires matching pairs according to a predicate, and outer joins preserve unmatched records around such matching rather than automatically generating every combination. FULL OUTER JOIN therefore is not another name for a Cartesian product. If either source is empty, the cross product is empty; preserving an empty-side placeholder would be a different requirement."
    },
    {
      "id": "db-211",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Evaluate the query: SELECT e2.EmployeeID, e2.LastName, e1.LastName AS Supervisor FROM Employees e1 JOIN Employees e2 ON e2.ReportsTo = e1.EmployeeID. What kind of join pattern is this?",
      "code": "SELECT e2.EmployeeID, e2.LastName, e1.LastName AS Supervisor\nFROM Employees e1\nJOIN Employees e2 ON e2.ReportsTo = e1.EmployeeID;",
      "options": [
        "Self join",
        "Cross join",
        "Full outer join",
        "Union"
      ],
      "correct": 0,
      "explanation": "This is a self join: Employees is read twice under different aliases. e1 represents the supervisor and e2 the reporting employee, with e2.ReportsTo matched to e1.EmployeeID. The result includes the employee ID and last name plus the supervisor's last name. It is an inner self join, so an employee without a matching supervisor is omitted. CROSS JOIN would pair all employees, FULL OUTER JOIN would preserve unmatched rows from both aliases, and UNION would combine compatible result rows rather than place employee and supervisor columns side by side."
    },
    {
      "id": "db-212",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A report must show OrderID, Subtotal, and a computed SalesTax equal to 5% of Subtotal. Which SELECT expression correctly creates the computed column?",
      "options": [
        "SELECT OrderID, Subtotal, Subtotal * 0.05 AS SalesTax FROM Orders",
        "SELECT OrderID, Subtotal, SalesTax = 5 FROM Orders",
        "ALTER TABLE Orders ADD SalesTax = 5%",
        "SELECT OrderID, Subtotal FROM Orders GROUP BY SalesTax"
      ],
      "correct": 0,
      "explanation": "Subtotal * 0.05 AS SalesTax calculates five percent of each order's subtotal and labels the resulting expression SalesTax. Multiplying by 1.05 would produce subtotal plus tax, which is a different requested value. The offered SalesTax = 5 syntax can represent a constant-column alias in T-SQL, but it returns 5 for every row instead of five percent. ALTER TABLE changes schema, not the requested report projection, and GROUP BY SalesTax neither creates the expression nor supplies the requested columns. NULL subtotals produce NULL tax values unless handled explicitly."
    },
    {
      "id": "db-213",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Customers has 300 rows and PotentialCustomers has 10 rows. Exactly 2 complete rows are identical between the two result sets. How many rows does UNION return? Assume each input result set has no duplicate rows within itself.",
      "options": [
        "308",
        "310",
        "312",
        "300"
      ],
      "correct": 0,
      "explanation": "UNION returns 300 + 10 − 2 = 308 rows. The two shared complete rows appear in both inputs but are retained only once in the combined distinct result. The explicit assumption of no duplicates within each input is necessary for this arithmetic. UNION ALL would return 310 because it preserves all occurrences. Subtracting too many overlaps could produce 300, while adding rather than eliminating the duplicate occurrences could produce 312. Equality must concern the entire selected row, not merely a shared customer identifier."
    },
    {
      "id": "db-214",
      "chapter": "extragere-date",
      "type": "drag_drop",
      "question": "Match each JOIN type to its result.",
      "dragItems": [
        {
          "id": "a",
          "text": "FULL OUTER JOIN"
        },
        {
          "id": "b",
          "text": "RIGHT OUTER JOIN"
        },
        {
          "id": "c",
          "text": "INNER JOIN"
        },
        {
          "id": "d",
          "text": "LEFT OUTER JOIN"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Rows with a match in both tables",
          "correctItemId": "c"
        },
        {
          "id": "z2",
          "label": "All rows from the left table plus matching rows from the right",
          "correctItemId": "d"
        },
        {
          "id": "z3",
          "label": "All rows from the right table plus matching rows from the left",
          "correctItemId": "b"
        },
        {
          "id": "z4",
          "label": "All rows from both tables, matched where possible",
          "correctItemId": "a"
        }
      ],
      "explanation": "INNER JOIN returns matching row pairs only. LEFT OUTER JOIN preserves all left rows and fills right-side columns with NULL where no match exists. RIGHT OUTER JOIN does the symmetric operation for the right table. FULL OUTER JOIN preserves unmatched rows from both sides while combining matching pairs. These descriptions do not imply one result per source row: multiple matches can produce several output rows. The join predicate still determines matching, and outer joins do not create every possible pairing as a CROSS JOIN would."
    },
    {
      "id": "db-215",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "A query uses Address1 + ' ' + Address2 in SELECT. Select Yes or No for each statement.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "The plus signs must be replaced by ampersands.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "The Location column will appear even though it is not selected.",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "Plus signs can concatenate character strings in SQL Server.",
          "correctItemId": "a"
        },
        {
          "id": "z4",
          "label": "A column not used in the SELECT list is not shown in the result.",
          "correctItemId": "a"
        }
      ],
      "explanation": "No / No / Yes / Yes. SQL Server can concatenate character strings with +, so ampersands are not the replacement. The SELECT expression uses Address1, a space and Address2; Location is not automatically added merely because the source table contains it. Columns absent from the SELECT projection do not appear unless another selected expression or wildcard includes them. With CONCAT_NULL_YIELDS_NULL enabled, an absent Address2 represented by NULL can make the concatenated address NULL. That affects the value, not which columns are projected.",
      "image": "assets/databases/pdf-002-locations.png"
    },
    {
      "id": "db-216",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A sales manager wants customers not in Los Angeles and not in Oregon or Washington. Which condition is clearest and correct?",
      "options": [
        "WHERE city <> 'Los Angeles' AND state NOT IN ('Oregon','Washington')",
        "WHERE city <> 'Los Angeles' OR state NOT IN ('Oregon','Washington')",
        "WHERE city = 'Los Angeles' AND state IN ('Oregon','Washington')",
        "WHERE city NOT IN ('Los Angeles','Oregon','Washington')"
      ],
      "correct": 0,
      "explanation": "The first condition requires city <> 'Los Angeles' AND state NOT IN ('Oregon','Washington'). Both exclusions must hold. OR would keep a Los Angeles customer whenever the state is not one of the two excluded states, or an Oregon customer whenever the city is different. The equality-and-IN option selects the excluded area instead. The final option tests state names against city and never filters the State column. Ordinary comparisons exclude NULL city/state values through UNKNOWN; retaining unknown locations would require an explicit additional rule."
    },
    {
      "id": "db-217",
      "chapter": "extragere-date",
      "type": "single",
      "question": "In SQL Server, which expression concatenates FirstName and LastName with a space using CONCAT?",
      "options": [
        "CONCAT(FirstName, ' ', LastName)",
        "FirstName CONCAT LastName",
        "CONCAT = FirstName + LastName",
        "MERGE(FirstName, LastName)"
      ],
      "correct": 0,
      "explanation": "CONCAT(FirstName, ' ', LastName) is the valid SQL Server function call. The arguments are comma-separated, and the literal space provides the separator between the two names. CONCAT is not an infix operator, so FirstName CONCAT LastName is invalid. CONCAT = ... does not call the function, and MERGE is not the string-concatenation function. SQL Server CONCAT treats NULL arguments as empty strings; this differs from + concatenation under CONCAT_NULL_YIELDS_NULL. The supplied space still remains if one name is NULL."
    },
    {
      "id": "db-218",
      "chapter": "extragere-date",
      "type": "single",
      "question": "What does NULLIF(A, B) return when A and B are equal?",
      "options": [
        "NULL",
        "A",
        "B",
        "0"
      ],
      "correct": 0,
      "explanation": "NULLIF(A, B) returns NULL when the comparison finds A and B equal; otherwise it returns A. This is useful, for example, for turning a zero denominator into NULL before division when that behavior is desired. Returning B or a literal 0 is not its equal-values rule. Ordinary SQL NULL comparison rules still apply: NULL is not simply equal to another NULL through =. NULLIF should also not be confused with COALESCE or ISNULL, which choose replacement values for a NULL expression."
    },
    {
      "id": "db-219",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A query returns only rows that have a matching key in both joined tables. Which join is being used?",
      "options": [
        "FULL OUTER JOIN",
        "INNER JOIN",
        "LEFT OUTER JOIN",
        "RIGHT OUTER JOIN"
      ],
      "correct": 1,
      "explanation": "INNER JOIN retains only row pairs satisfying the join condition, so unmatched records are not preserved. LEFT, RIGHT and FULL OUTER JOIN additionally keep unmatched rows from their preserved side or sides using NULL-extended columns. This describes the join operation itself; later WHERE filtering can change what an outer-join query ultimately displays. An inner join is not guaranteed to return one row per matching key if either side has duplicates, because every qualifying pair contributes a result row."
    },
    {
      "id": "db-220",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A weekly report must show the top five salespeople by their total sales during the last seven days. Which query has the correct grouping and clause order?",
      "options": [
        "SELECT TOP 5 Salesperson, SUM(Amount) AS TotalSales\nFROM sales_summary\nWHERE SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nGROUP BY Salesperson\nORDER BY SUM(Amount) DESC",
        "SELECT TOP 5 SaleDate, Salesperson, SUM(Amount)\nFROM sales_summary\nWHERE SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nGROUP BY SaleDate, Salesperson\nORDER BY SUM(Amount) DESC",
        "SELECT TOP 5 Salesperson, SUM(Amount)\nFROM sales_summary\nWHERE SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nORDER BY SUM(Amount) DESC\nGROUP BY Salesperson",
        "SELECT TOP 5 Salesperson, SUM(Amount)\nFROM sales_summary\nHAVING SaleDate BETWEEN GETDATE()-7 AND GETDATE()\nGROUP BY Salesperson\nORDER BY SUM(Amount) DESC"
      ],
      "correct": 0,
      "explanation": "The first query filters sales to the last-seven-day interval, groups by Salesperson, calculates SUM(Amount) for each salesperson and sorts those totals descending before TOP 5 selects the leading rows. The second also groups by SaleDate, splitting a salesperson's total across dates instead of one total per person. The third puts ORDER BY before GROUP BY, and the fourth misplaces HAVING and uses it for a non-grouped date filter. The boundary is a rolling GETDATE interval, not necessarily seven complete calendar dates. Ties need an additional sort key for deterministic selection."
    },
    {
      "id": "db-221",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A subquery can return several EmployeeID values. The outer query currently uses '= ALL'. Which keyword should replace ALL so an employee is returned when the ID matches any value from the subquery?",
      "code": "SELECT LastName, FirstName\nFROM Employees\nWHERE EmployeeID = ALL (\n  SELECT EmployeeID\n  FROM Sales\n  WHERE Amount > 50000\n);",
      "options": [
        "Change ALL to ANY",
        "Change ALL to JOIN",
        "Change ALL to WHERE",
        "Change ALL to IN only"
      ],
      "correct": 0,
      "explanation": "Replace ALL with ANY, yielding EmployeeID = ANY (subquery). The row then qualifies when its ID matches at least one returned value. = ALL requires equality to every returned value and fails when the set contains two different IDs. JOIN and WHERE cannot replace the comparison quantifier in that position. IN could express membership if the complete predicate were rewritten to EmployeeID IN (subquery), but replacing only ALL with IN would leave the invalid syntax = IN. The question specifically asks for the one-keyword replacement."
    },
    {
      "id": "db-222",
      "chapter": "extragere-date",
      "type": "single",
      "question": "In this application, a completed order is defined as one whose OrderDate is not NULL. Return completed orders with a non-NULL OrderType other than pre-order. Which WHERE condition is correct?",
      "options": [
        "WHERE OrderDate IS EMPTY AND NOT OrderType = 'pre-order'",
        "WHERE OrderDate IS NOT NULL AND OrderType <> 'pre-order'",
        "WHERE OrderDate <> NULL AND NOT OrderType = 'pre-order'",
        "WHERE OrderDate IS NOT NULL AND OrderType = 'pre-order'"
      ],
      "correct": 1,
      "explanation": "Use OrderDate IS NOT NULL AND OrderType <> 'pre-order'. The application-specific definition of completed is explicitly based on a present OrderDate, so do not substitute an unstated delivery or payment rule. IS EMPTY is not the T-SQL NULL predicate, and OrderDate <> NULL evaluates to UNKNOWN rather than testing presence. The equality alternative selects pre-orders, the opposite of the requested type exclusion. A NULL OrderType also does not satisfy the inequality, matching the requirement for a non-NULL type."
    },
    {
      "id": "db-223",
      "chapter": "extragere-date",
      "type": "drag_drop",
      "question": "Build a query that displays all clients whose State is New Mexico or whose City is Roswell.",
      "dragItems": [
        {
          "id": "a",
          "text": "WHERE State = 'New Mexico' AND City = 'Roswell'"
        },
        {
          "id": "b",
          "text": "SELECT * FROM Clients"
        },
        {
          "id": "c",
          "text": "SELECT ALL"
        },
        {
          "id": "d",
          "text": "WHERE State = 'New Mexico' OR City = 'Roswell'"
        },
        {
          "id": "e",
          "text": "FROM Clients"
        },
        {
          "id": "f",
          "text": "HAVING State = 'New Mexico'"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "d"
        }
      ],
      "explanation": "Choose SELECT * FROM Clients followed by WHERE State = 'New Mexico' OR City = 'Roswell'. The OR includes either location condition and also rows satisfying both. AND would restrict the result to Roswell within New Mexico and would exclude other requested New Mexico clients. SELECT ALL is incomplete without a projection/source here, FROM Clients alone cannot replace the complete first step, and HAVING is not the ordinary row-filter clause for this ungrouped query. The result contains the selected client rows, not combined state/city text."
    },
    {
      "id": "db-224",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "For each statement about GROUP BY, select Yes or No.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A GROUP BY clause must always be paired with HAVING.",
          "correctItemId": "b"
        },
        {
          "id": "z2",
          "label": "Non-aggregated columns selected with aggregate expressions normally belong in GROUP BY.",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "A GROUP BY clause must always be paired with WHERE.",
          "correctItemId": "b"
        }
      ],
      "explanation": "No / Yes / No. GROUP BY may be used without either HAVING or WHERE. WHERE is an optional pre-grouping row filter, while HAVING is an optional post-grouping filter. In SQL Server, selected non-aggregated column expressions must normally be represented in the grouping, so each result row has an unambiguous value for them. This requirement is separate from whether filtering occurs. GROUP BY does not imply a guaranteed display order; use ORDER BY when the output groups must be sorted."
    },
    {
      "id": "db-225",
      "chapter": "extragere-date",
      "type": "single",
      "question": "A report must return only cities whose total SalesAmount is at least 50000. Which query is correct?",
      "options": [
        "SELECT State, City, SUM(SalesAmount)\nFROM Sales\nGROUP BY State, City\nHAVING SUM(SalesAmount) >= 50000",
        "SELECT State, City, SUM(SalesAmount)\nFROM Sales\nGROUP BY State, City\nWHERE SUM(SalesAmount) >= 50000",
        "SELECT State, City, SUM(SalesAmount)\nFROM Sales\nWHERE SalesAmount >= 50000\nGROUP BY State, City"
      ],
      "correct": 0,
      "explanation": "The first query groups by State and City, sums SalesAmount for each city group and retains groups with SUM(SalesAmount) >= 50000 using HAVING. Placing WHERE after GROUP BY is invalid, and an aggregate total does not belong in that ordinary WHERE condition. Filtering individual SalesAmount rows to >= 50000 before grouping answers a different question and loses smaller sales that may collectively exceed the threshold. Including State prevents identically named cities in different states from being merged into one total."
    },
    {
      "id": "db-226",
      "chapter": "extragere-date",
      "type": "single",
      "question": "You need total sales and average sales for each Region and Salesperson. Which query is correct?",
      "options": [
        "SELECT Region, Salesperson, SUM(Sales), AVG(Sales)\nFROM TotalSales\nGROUP BY Region, Salesperson",
        "SELECT Region, Salesperson, SUM(Sales), AVERAGE(Sales)\nFROM TotalSales",
        "SELECT Region, Salesperson, SUM(Sales), AVG(Sales)\nFROM TotalSales\nGROUP BY Region"
      ],
      "correct": 0,
      "explanation": "The first query selects Region and Salesperson, applies SUM(Sales) and AVG(Sales), and groups by both selected non-aggregate columns. This yields one aggregate row for each region/salesperson combination. AVERAGE is not the SQL aggregate name; AVG is. Grouping only by Region leaves Salesperson ungrouped and is invalid in SQL Server for the shown projection. NULL sale values are ignored by these aggregates. If Sales is an integer in SQL Server, AVG's result type should be considered when fractional averages must be retained."
    },
    {
      "id": "db-227",
      "chapter": "extragere-date",
      "type": "single",
      "question": "An IT manager wants the lowest number of calls for each day. Which query is correct?",
      "options": [
        "SELECT log_date, MAX(calls) FROM call_log",
        "SELECT log_date, MIN(calls) FROM call_log",
        "SELECT log_date, MIN(calls) FROM call_log GROUP BY log_date",
        "SELECT log_date, MIN(calls) FROM call_log GROUP BY MIN(calls)"
      ],
      "correct": 2,
      "explanation": "The third query uses MIN(calls) for the lowest count and GROUP BY log_date to calculate that minimum separately for each day. MAX returns the highest count instead. Selecting log_date with MIN(calls) but without grouping it is invalid in SQL Server. GROUP BY MIN(calls) improperly groups by an aggregate expression rather than forming the day groups. This query answers the lowest recorded count within each day, not the separate question of which day has the lowest total or count across the entire log."
    },
    {
      "id": "db-228",
      "chapter": "manipulare-date",
      "type": "drag_drop",
      "question": "Match each SQL language category to typical commands.",
      "dragItems": [
        {
          "id": "a",
          "text": "DML"
        },
        {
          "id": "b",
          "text": "DDL"
        },
        {
          "id": "c",
          "text": "DCL / permissions"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "INSERT, UPDATE, DELETE",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "CREATE, ALTER, DROP",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "GRANT, REVOKE",
          "correctItemId": "c"
        }
      ],
      "explanation": "INSERT, UPDATE and DELETE map to DML because they change stored row data. CREATE, ALTER and DROP map to DDL because they define, modify or remove schema objects. GRANT and REVOKE map to DCL / permissions because they assign or remove privileges. These categories describe the statement's role rather than the size of the change. Some taxonomies classify SELECT separately as DQL, while SQL Server documentation includes it within DML; that convention difference does not affect any of the three supplied mappings."
    },
    {
      "id": "db-229",
      "chapter": "manipulare-date",
      "type": "multiple",
      "question": "What are three valid data manipulation language (DML) commands? (Choose three.)",
      "options": [
        "INSERT",
        "COMMIT",
        "DELETE",
        "OUTPUT",
        "UPDATE"
      ],
      "correct": [
        0,
        2,
        4
      ],
      "explanation": "Choose INSERT, DELETE and UPDATE. They add rows, remove rows and modify stored values, respectively. COMMIT finishes a transaction and is normally classified as transaction control, not a row-manipulation statement. OUTPUT is a T-SQL clause that can return information about affected rows, not a standalone DML statement in this list. The distinction is between commands that perform data changes and supporting clauses or transaction-boundary commands that can accompany those operations."
    },
    {
      "id": "db-230",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "In SQL, an insert statement is used to add a: An INSERT statement adds a ______ to a table.",
      "options": [
        "row of data",
        "database user",
        "table definition",
        "column constraint"
      ],
      "correct": 0,
      "explanation": "INSERT adds a row of data to a table; supported forms can also add several rows at once. It does not create a database user, define a table or add a column constraint. Those are different administrative or DDL operations such as CREATE USER, CREATE TABLE and ALTER TABLE. A valid INSERT must provide values compatible with the destination columns and satisfy the table's constraints. Supplying a row is not the same as changing the schema that defines what each row can contain."
    },
    {
      "id": "db-231",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "On which database structure does an insert statement operate?",
      "options": [
        "Role",
        "Trigger",
        "User",
        "Stored procedure",
        "Table"
      ],
      "correct": 4,
      "explanation": "An INSERT operates on a table or another supported insertable data target such as an updatable view; Table is the appropriate listed structure. A role or user is a security principal, not a row store. A stored procedure contains executable logic and a trigger responds to events, although either can execute or be invoked by data-changing operations. Inserting a row may fire a table's trigger, but the trigger is not the destination that holds the inserted business record."
    },
    {
      "id": "db-232",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to add rows to a database table. Which Structured Query Language (SQL) keyword should you use?",
      "options": [
        "JOIN",
        "INSERT",
        "CREATE",
        "UPDATE"
      ],
      "correct": 1,
      "explanation": "INSERT is the keyword for adding rows to an existing database table. UPDATE changes values in rows already present. CREATE defines an object, such as a new table, rather than adding a record to the existing one. JOIN combines row sources in a query and does not itself persist additional records. An INSERT may use VALUES or a SELECT as its source, but the INSERT action identifies that the result is being added to the destination rather than merely displayed."
    },
    {
      "id": "db-233",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What statement would you use to add data to a table?",
      "options": [
        "ADD",
        "INSERT",
        "JOIN",
        "PRESENT"
      ],
      "correct": 1,
      "explanation": "Use INSERT to add records to the table. The common form is INSERT INTO table_name (columns) VALUES (values), or INSERT ... SELECT to load query results. ADD is used within some schema-changing statements, not as the standalone row-insertion command. JOIN combines row sources, and PRESENT is not the SQL statement for this task. Adding data requires values that satisfy the defined types and constraints; INSERT does not redefine those columns merely because a new record is supplied."
    },
    {
      "id": "db-234",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which of the following is a row-changing Data Manipulation Language (DML) statement, rather than a retrieval statement?",
      "options": [
        "ALTER TABLE Employee ADD EmployeeName VARCHAR(100);",
        "SELECT EmployeeName FROM Employee WHERE EmployeeName = 'Jack Smith';",
        "CREATE TABLE EmployeeCopy (EmployeeName VARCHAR(100));",
        "INSERT INTO Employee (EmployeeName) VALUES ('Jack Smith');"
      ],
      "correct": 3,
      "explanation": "The INSERT INTO Employee ... VALUES ('Jack Smith') statement is the row-changing DML operation requested by the clarified stem. SELECT retrieves a name but does not change records. ALTER TABLE and CREATE TABLE are DDL because they modify or create schema. The clarification matters because SQL Server documentation includes SELECT in its broader DML category, while some introductory courses call retrieval DQL. Restricting the question to row-changing DML makes the existing single-answer format unambiguous without pretending that there is only one universal classification convention."
    },
    {
      "id": "db-235",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have the following table definition The Road table contains the following data: You execute the following statement: INSERT INTO Road VALUES (1234, 36) What is the result?",
      "code": "CREATE TABLE Road (RoadID INTEGER NOT NULL, Distance INTEGER NOT NULL);\n-- Existing rows: (1234,22), (1384,34)\nINSERT INTO Road VALUES (1234,36);",
      "options": [
        "an error stating that NULL values are not allowed",
        "a new row in the table",
        "an error stating that duplicate IDs are not allowed",
        "a syntax error"
      ],
      "correct": 1,
      "explanation": "The statement inserts a new row (1234,36). Both supplied values are non-NULL and follow the declared integer column order. RoadID 1234 already appears, but the definition has only NOT NULL constraints, not PRIMARY KEY or UNIQUE, so that repetition is allowed. Calling a column RoadID does not automatically make it unique. There is no foreign-key or duplicate-ID constraint shown to reject the row and no syntax error in the INSERT. The resulting table contains the two original rows plus this new one."
    },
    {
      "id": "db-236",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have the following table definition You need to insert a new product. The product's name is Plate and the product's ID is 12345. Which statement should you use?",
      "code": "CREATE TABLE Product (ProductID INTEGER, Name VARCHAR(20))",
      "options": [
        "INSERT INTO Product VALUES (ProductID= 12345, Name = 'Plate')",
        "INSERT NEW ProductID = 12345, Name = 'Plate' INTO Product",
        "INSERT 12345, 'Plate' INTO Product",
        "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate')"
      ],
      "correct": 3,
      "explanation": "INSERT INTO Product (ProductID, Name) VALUES (12345, 'Plate') correctly maps the numeric identifier and quoted product name to the declared columns. Assignment expressions such as ProductID = 12345 are not the value syntax used inside this INSERT's VALUES list. INSERT NEW and placing bare values before INTO are also invalid forms. Explicitly naming the columns makes the mapping clear even if table column order later changes. Both values fit the given INTEGER and VARCHAR(20) types, subject to any constraints not shown."
    },
    {
      "id": "db-237",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to insert two new products into the Product table. The first product is named Book and has an ID of 125. The second product is named Movie and has an ID of 126. Which statement should you use?",
      "options": [
        "INSERT INTO Product VALUES (ID= 125, 126) (Name ='Book', 'Movie')",
        "INSERT INTO Product (ID, Name) VALUES (125, 'Book') INSERT INTO Product (ID, Name) VALUES (126, 'Movie')",
        "INSERT 125, 126, 'Book', 'Movie' INTO Product",
        "INSERT NEW ID = 125 AND 126, Name = 'Book' AND 'Movie' INTO Product",
        "INSERT NEW ID = 125, Name = = 'Book' INTO Product INSERT NEW ID = 126, Name = 'Movie' INTO Product"
      ],
      "correct": 1,
      "explanation": "The second option contains two valid INSERT statements, one for (125,'Book') and one for (126,'Movie'). Each lists ID and Name and then gives a matching VALUES tuple. SQL Server can accept these as consecutive statements, although semicolons are good practice. A multi-row VALUES statement would be another valid approach but is not offered in this item. The other options use nonexistent INSERT NEW forms, mix assignment notation into the wrong place or fail to express separate correctly ordered row tuples."
    },
    {
      "id": "db-238",
      "chapter": "manipulare-date",
      "type": "multiple",
      "question": "The AddressInfo table has columns StreetAddress, City, State, and PostalCode in that order. Which two INSERT statements can correctly add the row shown? (Choose two.)",
      "image": "assets/databases/pdf-076-address-info.png",
      "options": [
        "INSERT INTO AddressInfo (StreetAddress, City, State, PostalCode) VALUES ('1234 Main Street', 'Dallas', 'TX', '75201');",
        "INSERT INTO AddressInfo VALUES ('1234 Main Street', 'Dallas', 'TX', '75201');",
        "UPDATE AddressInfo SET StreetAddress='1234 Main Street', City='Dallas', State='TX', PostalCode='75201';",
        "INSERT AddressInfo ('1234 Main Street', 'Dallas', 'TX', '75201');"
      ],
      "correct": [
        0,
        1
      ],
      "explanation": "The first and second statements both insert the specified address. One explicitly names StreetAddress, City, State and PostalCode; the other relies on exactly that declared column order. The values '1234 Main Street', 'Dallas', 'TX' and '75201' then map to the correct fields, with PostalCode kept as text. UPDATE modifies existing records and does not add this new row. The final INSERT omits the required VALUES or SELECT source syntax. Naming the destination columns is generally safer than relying on physical order, even though both offered forms work here.",
      "imageAlt": "address info"
    },
    {
      "id": "db-239",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table named Product that contains the following data. The ProductID column is the primary key. The CategoryID column is a foreign key to a separate table Category. You execute the following statement What is the result?",
      "code": "-- Product(ProductID PRIMARY KEY, ProductName, CategoryID FOREIGN KEY)\n-- Existing products: (3296,'Spoon',2222), (1114,'Chair',4444)\n-- Category 4444 already exists.\nINSERT INTO Product VALUES(3296,'Table',4444);",
      "options": [
        "a foreign key constraint violation",
        "a syntax error",
        "a new row in the Product table",
        "a primary key constraint violation",
        "a new row in the Category table"
      ],
      "correct": 3,
      "explanation": "The INSERT fails with a primary-key violation because ProductID 3296 already exists as Spoon. A primary key rejects a duplicate identifying value regardless of the new product name. CategoryID 4444 is explicitly stated to exist, so this is not the missing-parent foreign-key error. The statement's syntax is valid, but no new Product row is accepted due to the duplicate key. Inserting into Product does not automatically create another Category record, so the final alternative also describes an operation the statement does not perform."
    },
    {
      "id": "db-240",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to populate a table named EmployeeCopy with data from an existing table named Employee. Which statement should you use?",
      "options": [
        "SELECT * INTO EmployeeCopy SELECT * FROM Employee",
        "INSERT * FROM Employee INTO EmployeeCopy",
        "COPY INTO Employee SELECT * FROM Employee",
        "INSERT INTO EmployeeCopy SELECT * FROM Employee"
      ],
      "correct": 3,
      "explanation": "INSERT INTO EmployeeCopy SELECT * FROM Employee adds the selected Employee rows to the existing EmployeeCopy table, assuming the column order and types are compatible. INSERT * FROM and COPY INTO are not the SQL Server syntax shown for this task. The first option also combines SELECT INTO with an extra SELECT incorrectly. SELECT ... INTO is a separate feature for creating a new target table from a query, not the ordinary way to append to an already existing EmployeeCopy. Explicit column lists are safer in production code."
    },
    {
      "id": "db-241",
      "chapter": "manipulare-date",
      "type": "true_false",
      "question": "An UPDATE statement modifies data stored in rows of a table.",
      "options": [
        "True",
        "False"
      ],
      "correct": 0,
      "explanation": "True. UPDATE changes values in existing rows of a table, using SET to state the assignments and usually WHERE to select the intended records. It does not normally add a row or remove the row itself. INSERT and DELETE perform those different actions. If WHERE is omitted in a simple UPDATE, every target row is eligible for the assignment. Constraints, permissions and triggers may still affect whether the operation succeeds, but they do not change UPDATE's basic role as a row-value modification statement."
    },
    {
      "id": "db-242",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table that contains information about all students in your school. Which SQL keyword should you use to change a student's first name in the table?",
      "options": [
        "UPDATE",
        "CHANGE",
        "SELECT",
        "INSERT"
      ],
      "correct": 0,
      "explanation": "Use UPDATE to change the stored first name for an existing student. A complete statement would identify the table, assign the new value in SET and use a suitable WHERE predicate, preferably a unique student identifier. SELECT only retrieves data, and INSERT adds a new row rather than editing the existing one. CHANGE is not the standalone SQL Server row-update command. Omitting the intended WHERE condition could change many students, so choosing UPDATE is only the first part of writing a safe statement."
    },
    {
      "id": "db-243",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What statement would you use to change data in a table?",
      "options": [
        "CHANGE",
        "MODIFY",
        "INSERT",
        "UPDATE"
      ],
      "correct": 3,
      "explanation": "UPDATE is the SQL statement that changes existing data values in a table. It uses SET for the new values and can use WHERE to limit the affected rows. INSERT adds new records, which is different from modifying an existing one. CHANGE and MODIFY are not the standalone T-SQL data-modification command requested here, even though some vendors use similar words in schema-alteration syntax. An UPDATE changes stored facts without redefining the table's columns or their data types."
    },
    {
      "id": "db-244",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You need to change ProductName to 'Glass' for a specific product. Which SET clause belongs in the UPDATE statement?",
      "options": [
        "SET ProductName = 'Glass'",
        "LET ProductName = 'Glass'",
        "EXEC ProductName = 'Glass'",
        "ASSIGN ProductName = 'Glass'"
      ],
      "correct": 0,
      "explanation": "SET ProductName = 'Glass' is the assignment clause required inside the UPDATE statement. The single quotes delimit the replacement text. LET, EXEC and ASSIGN are not substitutes for SET in this T-SQL row-update syntax. EXEC invokes executable routines or statements rather than assigning this column. The full statement still needs UPDATE Product and an appropriate WHERE condition to identify the specific product; this SET fragment alone does not restrict which rows would receive the new name."
    },
    {
      "id": "db-245",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table of products with fields for ProductID, Name, Price, and InStock. You need to write an UPDATE statement that sets the value in the InStock field to Yes for a specific ProductID. Which clause should you use in your update statement?",
      "options": [
        "THAT",
        "WHERE",
        "GROUP BY",
        "HAVING"
      ],
      "correct": 1,
      "explanation": "WHERE identifies the specific ProductID whose InStock value should change. SET supplies the replacement value, while WHERE limits which row or rows receive it. GROUP BY creates query groups and HAVING filters grouped results; neither is the ordinary row-targeting clause in this UPDATE. THAT is not a SQL clause for the operation. A unique ProductID makes the condition precise. Without a WHERE condition, a simple UPDATE would apply the assignment to every product rather than just the intended item."
    },
    {
      "id": "db-246",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What happens if you omit the WHERE clause in an UPDATE statement?",
      "options": [
        "No records will be updated",
        "Only the first record will be updated",
        "All records will be updated",
        "The query will fail with an error"
      ],
      "correct": 2,
      "explanation": "In a simple unfiltered UPDATE, every row in the target table is eligible for the SET assignment. It does not silently update only the first row or skip every record, and a WHERE clause is not syntactically mandatory. The table may be empty, some assigned values may already be present, and constraints or permissions can still make an actual execution fail; those qualifications do not make the unfiltered statement a one-row update. Use a selective WHERE and check the affected-row count when targeting a specific record."
    },
    {
      "id": "db-247",
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "Complete the UPDATE query that replaces Benjamin with Kayden in the Students table.",
      "dragItems": [
        {
          "id": "a",
          "text": "SET FirstName = 'Kayden'"
        },
        {
          "id": "b",
          "text": "FROM FirstName = 'Benjamin'"
        },
        {
          "id": "c",
          "text": "SET Students"
        },
        {
          "id": "d",
          "text": "FROM Students"
        },
        {
          "id": "e",
          "text": "WHERE FirstName = 'Benjamin'"
        },
        {
          "id": "f",
          "text": "UPDATE FirstName = 'Kayden'"
        },
        {
          "id": "g",
          "text": "UPDATE Students"
        },
        {
          "id": "h",
          "text": "TO FirstName = 'Kayden'"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "g"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "a"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "e"
        }
      ],
      "explanation": "Use UPDATE Students, then SET FirstName = 'Kayden', then WHERE FirstName = 'Benjamin'. UPDATE names the target, SET states the new value and WHERE identifies the old-value rows. FROM FirstName = ... is not a filter clause, and UPDATE FirstName = ... incorrectly puts an assignment where the table belongs. TO does not replace SET. This updates every row whose first name matches Benjamin, not necessarily just one student; use a unique identifier if only a particular Benjamin should change."
    },
    {
      "id": "db-248",
      "chapter": "manipulare-date",
      "type": "multiple",
      "question": "Harry in San Francisco (ID 4) returns all your books. Which two statements correctly update the shown LoanedBooks table? Choose two.",
      "image": "assets/databases/pdf-078-loaned-books.png",
      "options": [
        "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' AND City='San Francisco';",
        "INSERT INTO LoanedBooks SET Books=0 WHERE ID=4;",
        "UPDATE LoanedBooks SET Books=0 WHERE Name='Harry' OR City='San Francisco';",
        "UPDATE LoanedBooks SET Books=0 WHERE ID=4;"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "The first and fourth statements correctly change Harry in San Francisco to Books = 0. In the displayed table, Name = 'Harry' AND City = 'San Francisco' identifies ID 4; WHERE ID = 4 targets that record directly. Using OR also matches Harry in New York and Sally in San Francisco, altering unintended rows. INSERT ... SET ... WHERE is not the required SQL Server update syntax and does not describe modifying the existing loan record. The table shows Books changing from 3 to 0 for ID 4 while the other rows remain unchanged.",
      "imageAlt": "loaned books"
    },
    {
      "id": "db-249",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table named Product. The Product table has columns for ProductDescription and ProductCategory. You need to change the ProductCategory value for all the spoons in the Product table to 43. Which statement should you use?",
      "options": [
        "UPDATE Product SET ProductCategory = 43 WHERE ProductDescription = 'spoon'",
        "SET Product WHERE ProductDescription = 'spoon' TO ProductCategory = 43",
        "UPDATE Product WHERE ProductDescription = 'spoon' SET ProductCategory = 43",
        "SET Product TO ProductCategory = 43 WHERE Product Description = 'spoon'"
      ],
      "correct": 0,
      "explanation": "UPDATE Product SET ProductCategory = 43 WHERE ProductDescription = 'spoon' has the correct target, assignment and filter order. It changes every matching spoon row, as requested, without altering other product descriptions. The alternatives use SET as an unsupported standalone target-update statement, place WHERE before SET, or split ProductDescription into an unintended identifier. If case-sensitive comparison is in effect, the exact spelling of spoon matters; that is a collation issue rather than a reason to reorder the SQL clauses."
    },
    {
      "id": "db-250",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "The Volunteer table contains a volunteer whose GivenName is Tia. Which statement changes that name to Kimberly?",
      "options": [
        "SET GivenName = 'Kimberly' FROM Volunteer WHERE GivenName = 'Tia';",
        "SET Volunteer TO GivenName = 'Kimberly' WHERE GivenName = 'Tia';",
        "UPDATE GivenName = 'Kimberly' FROM Volunteer WHERE GivenName = 'Tia';",
        "UPDATE Volunteer SET GivenName = 'Kimberly' WHERE GivenName = 'Tia';"
      ],
      "correct": 3,
      "explanation": "The fourth option uses the correct form: UPDATE Volunteer SET GivenName = 'Kimberly' WHERE GivenName = 'Tia'. It changes the matched name value while retaining the volunteer row. SET ... FROM and SET Volunteer TO are not the valid forms shown for this task, and UPDATE GivenName = ... puts an assignment where a target is required. Every matching Tia would be changed if several existed; a unique ID would be needed to limit the operation to one particular person in that case."
    },
    {
      "id": "db-251",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "The products table contains the following data. Which query will increase the price of item 1 by 6 percent ?",
      "image": "assets/databases/pdf-080-products.png",
      "options": [
        "USE Products SET Price = Price * 1.06 WHERE ItemNumber = 1;",
        "SET Price = Price * 1.06 FROM Products WHERE ItemNumber = 1;",
        "ALTER Products SET Price = Price * 1.06 WHERE ItemNumber = 1;",
        "UPDATE Products SET Price = Price * 1.06 WHERE ItemNumber = 1;"
      ],
      "correct": 3,
      "explanation": "Use UPDATE Products SET Price = Price * 1.06 WHERE ItemNumber = 1. A six-percent increase keeps the original 100% and adds 6%, so the multiplier is 1 + 0.06 = 1.06. For the shown price 24.95, the unrounded result is 26.447; the stored/displayed result depends on the Price type and scale, typically 26.45 at two decimal places. USE selects a database context and ALTER changes schema, not row prices. The offered SET ... FROM form is not the required complete UPDATE.",
      "imageAlt": "products"
    },
    {
      "id": "db-252",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What statement is used to remove one or more record from a table?",
      "options": [
        "DELETE",
        "TRUNCATE",
        "DROP",
        "ALTER"
      ],
      "correct": 0,
      "explanation": "DELETE removes selected records and can use WHERE to specify which ones. If WHERE is omitted, a simple DELETE removes all rows while retaining the table definition. TRUNCATE also empties a table but cannot select an arbitrary subset with WHERE. DROP removes the table object itself, and ALTER changes its structure rather than being the ordinary record-removal command. The distinction is whether the target is data rows, all table contents through a special operation, or the schema object."
    },
    {
      "id": "db-253",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "What is one difference between an update statement and a delete statement?",
      "options": [
        "An update statement can change only one row.",
        "A delete statement cannot use a where clause.",
        "An update statement does not remove rows from a table.",
        "A delete statement works only within a stored procedure."
      ],
      "correct": 2,
      "explanation": "An UPDATE changes values in rows rather than removing those rows from the table, which is the third option. UPDATE can affect one row, several rows or all rows, so the first statement is false. DELETE can use WHERE and does not require a stored procedure, contradicting the second and fourth choices. Both operations can be constrained to selected records, but they have different effects: modifying fields versus removing records. Triggers and constraints can add behavior, yet they do not alter the basic distinction asked here."
    },
    {
      "id": "db-254",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You accept an IT internship at a local charity. The charity ask you to keep a record of its volunteers by using a database table named Volunteer. The table has the following columns and rows: You must update the table when volunteers ask to be removed from mailing list You need to delete all records with the GivenName Tia Which SQL statement should you use ?",
      "options": [
        "DELETE FROM Volunteer WHERE GivenName = = 'Tia'",
        "DELETE FROM Volunteer WHERE GivenName = 'Tia'",
        "DELETE FROM Volunteer WHERE GivenName EQUALS 'Tia'",
        "DELETE FROM Volunteer WHERE GivenName IS 'Tia'"
      ],
      "correct": 1,
      "explanation": "DELETE FROM Volunteer WHERE GivenName = 'Tia' removes every row matching that name. SQL equality uses one equals sign, not == or the word EQUALS. IS is used in predicates such as IS NULL, not as the offered replacement for text equality. The WHERE condition ensures other names are not targeted, while DELETE FROM retains the Volunteer table definition. If several volunteers are named Tia, the question explicitly requests all of them rather than only one uniquely identified person."
    },
    {
      "id": "db-255",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Your database contains a table named Customer. You need to delete the record from the Customer table that has a CusromerID of 12345. Which statement should you use?",
      "options": [
        "UPDATE Customer DELETE * WHERE CustomerID = 12345",
        "DELETE CustomerID FROM Customer WHERE CustomerID = 12345",
        "UPDATE CustomerID FROM Customer DELETE * WHERE CustomerID = 12345",
        "DELETE FROM Customer WHERE CustomerID = 12345"
      ],
      "correct": 3,
      "explanation": "DELETE FROM Customer WHERE CustomerID = 12345 has the correct syntax and condition. DELETE removes complete records; it does not list CustomerID as though selecting a column to remove. The alternatives beginning with UPDATE mix incompatible operations and do not express a valid DELETE. If CustomerID is unique, at most one row matches; otherwise all matching rows would be targeted. Existing foreign keys or triggers may affect actual execution, but they do not make one of the malformed statements correct."
    },
    {
      "id": "db-256",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which statement deletes the rows where the employee's phone number is not entered?",
      "options": [
        "DELETE FROM Employee WHERE Phone IS NULL",
        "DELETE FROM Employee WHERE Phone IS NOT NULL",
        "DELETE FROM Employee WHERE Phone = '%'",
        "DELETE FROM Employee WHERE Phone = NULLABLE"
      ],
      "correct": 0,
      "explanation": "DELETE FROM Employee WHERE Phone IS NULL targets records whose phone value is missing as NULL. IS NOT NULL selects the opposite group. Phone = '%' tests equality to a literal percent character rather than absence, and NULLABLE is not a value keyword for this comparison. A blank string is also different from NULL; if the application stores missing phones as empty text, an additional condition would be needed. The question's database meaning of not entered is the NULL representation tested by IS NULL."
    },
    {
      "id": "db-257",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "A database contains Customer and Orders. Assume no delete triggers or blocking constraints. What is the result of this statement?",
      "code": "DELETE FROM Orders WHERE CustomerID = 209;",
      "options": [
        "The first order for CustomerID 209 is deleted from the Orders table.",
        "All orders for CustomerID 209 are deleted from the Orders table, and CustomerID 209 is deleted from the Customer table.",
        "All orders for CustomerID 209 are deleted from the Orders table.",
        "CustomerID 209 is deleted from the Customer table."
      ],
      "correct": 2,
      "explanation": "All Orders rows with CustomerID = 209 are deleted from Orders. DELETE applies to every row satisfying the predicate, not only the first. It does not target the Customer table and does not delete a parent customer merely because related child rows are removed. The stem excludes triggers and blocking constraints that could add behavior or prevent completion. No WHERE condition references a particular OrderID, so every order for that customer is included in the deletion scope."
    },
    {
      "id": "db-258",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "You have a table named Student that contains 100 rows. Some of the rows have a NULL value in the FirstName column. You execute the following statement What is the result?",
      "code": "DELETE FROM Student;",
      "options": [
        "All rows in the table will be deleted.",
        "All rows containing a NULL value in the FirstName column will be deleted.",
        "You will receive an error message.",
        "All rows and the table definition will be deleted."
      ],
      "correct": 0,
      "explanation": "All 100 rows are deleted because DELETE FROM Student has no WHERE predicate. The NULL FirstName values do not receive special treatment: the statement applies to every row regardless of its name. The Student table definition remains, so this is not equivalent to DROP TABLE. Nothing in the supplied command makes NULL values an error. Constraints, permissions or triggers could affect a real execution, but no such blocking condition is provided in this item. The important missing restriction is WHERE, not a NULL test."
    },
    {
      "id": "db-259",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which INSERT statement correctly inserts multiple rows in one statement?",
      "options": [
        "INSERT INTO table_name (column1, column2) VALUES (value1, value2), (value3, value4);",
        "INSERT INTO table_name (column1, column2) VALUES (value1,value2) VALUES (value3,value4);",
        "INSERT INTO table_name SELECT (column1,column2,column3);",
        "INSERT INTO table_name VALUES value1, value2, value3;"
      ],
      "correct": 0,
      "explanation": "The first statement gives one INSERT with two comma-separated VALUES tuples, each matching column1 and column2 in order. That is the valid multi-row VALUES form. Repeating VALUES without a separating INSERT or the proper tuple list is not the required syntax. The SELECT alternative does not provide the specified row-source form, and the unparenthesized value list lacks the required row-constructor structure. Each inserted tuple must have a compatible number and type of values and satisfy the destination table's constraints."
    },
    {
      "id": "db-260",
      "chapter": "depanare",
      "type": "single",
      "question": "Which range condition contains a syntax error?",
      "options": [
        "salary <= 50000 AND salary >= 10000",
        "salary BETWEEN 10000 AND 50000",
        "salary >= 10000 AND salary <= 50000",
        "salary BETWEEN (10000 AND 50000) AND (60000 AND 90000)"
      ],
      "correct": 3,
      "explanation": "The fourth condition is invalid: BETWEEN expects one lower expression and one upper expression, not parenthesized AND expressions representing two ranges. The first and third choices are equivalent valid lower/upper comparisons, and BETWEEN 10000 AND 50000 is a valid inclusive version. To express two disjoint ranges, write two separate BETWEEN predicates joined with OR. This distinction is syntactic as well as logical: enclosing numbers with AND does not turn them into a valid range endpoint."
    },
    {
      "id": "db-261",
      "chapter": "depanare",
      "type": "single",
      "question": "Evaluate the CREATE VIEW statement below. What causes the syntax error?",
      "code": "CREATE VIEW vw UtahCustomers AS\nSELECT LastName, FirstName\nFROM Customers\nWHERE State = 'Utah';",
      "options": [
        "Semicolons are missing from the statements.",
        "The WHERE value must use double quotes.",
        "The WHERE clause needs == instead of =.",
        "The view name is invalid because it contains an unquoted space."
      ],
      "correct": 3,
      "explanation": "The view name contains an unquoted space: vw UtahCustomers is not parsed as one ordinary identifier. Use a single name such as vw_UtahCustomers or delimit the intended name as [vw UtahCustomers] in SQL Server. A semicolon is not required after every line of this statement. 'Utah' is correctly a single-quoted string literal, and equality uses = rather than ==. The WHERE clause and SELECT list are not the source of the shown naming error."
    },
    {
      "id": "db-262",
      "chapter": "depanare",
      "type": "single",
      "question": "A developer tries to remove a view with the statement below and receives an error. What is the most likely fix?",
      "code": "DELETE VIEW UtahCustomers;",
      "options": [
        "Use DROP instead of DELETE.",
        "Use TRUNCATE instead of DELETE.",
        "Use REVOKE instead of DELETE.",
        "Add a WHERE clause."
      ],
      "correct": 0,
      "explanation": "Use DROP VIEW UtahCustomers. DROP removes the schema object, whereas DELETE removes data rows from a valid data target. TRUNCATE is a table-emptying command, not a way to delete a view definition. REVOKE removes a permission and would leave the view itself in place. Adding WHERE cannot repair DELETE VIEW because the command is already the wrong object-removal operation. Dropping the view does not itself drop the base tables or erase their records."
    },
    {
      "id": "db-263",
      "chapter": "depanare",
      "type": "single",
      "question": "What causes the CREATE VIEW statement below to fail?",
      "code": "CREATE VIEW vw_CustomerNames\nSELECT CustomerID, LastName\nFROM Customers;",
      "options": [
        "The AS keyword is missing before SELECT.",
        "SELECT must be inside BEGIN/END.",
        "CustomerID cannot appear in a view.",
        "A view cannot read from a table."
      ],
      "correct": 0,
      "explanation": "AS is missing between the view name and SELECT. The correct structure is CREATE VIEW vw_CustomerNames AS SELECT CustomerID, LastName FROM Customers. BEGIN/END is not required around an ordinary view query. A view may include CustomerID and may read from a table; those are normal uses of a view, not errors. This statement is defining a reusable query interface rather than a stored procedure, so procedure-block syntax does not fix the actual omission."
    },
    {
      "id": "db-264",
      "chapter": "depanare",
      "type": "single",
      "question": "Evaluate the SELECT query below. What causes the query failure?",
      "code": "SELECT LastName, FirstName, COUNT(OrderID)\nFROM Customers\nGROUP BY LastName\nHAVING COUNT(OrderID) >= 5;",
      "options": [
        "The GROUP BY clause is incomplete.",
        "A WHERE clause is required whenever HAVING is used.",
        "A semicolon is required after every line.",
        "A schema name is required."
      ],
      "correct": 0,
      "explanation": "GROUP BY is incomplete because FirstName is selected without being aggregated or included in the grouping. In SQL Server, grouping only by LastName cannot supply one unambiguous FirstName value for each group. Add FirstName to GROUP BY if that is the intended grouping. HAVING does not require a WHERE clause, semicolons are not placed after every line, and a schema prefix is not the missing syntactic requirement. This diagnosis assumes the referenced columns, including OrderID, exist as the question intends; no alternative schema should be invented."
    },
    {
      "id": "db-265",
      "chapter": "depanare",
      "type": "single",
      "question": "Where is the syntax error in the query below?",
      "code": "SELECT LastName, FirstName, COUNT(OrderID)\nFROM Customers\nGROUPBY LastName, FirstName\nHAVING COUNT(OrderID) >= 5;",
      "options": [
        "GROUPBY should be written as GROUP BY.",
        "HAVING must appear before GROUP BY.",
        "A semicolon is required after SELECT.",
        "Each selected field must be on a separate line."
      ],
      "correct": 0,
      "explanation": "GROUPBY must be written as the two keywords GROUP BY. After that correction, the shown clause order FROM, GROUP BY, HAVING is correct. HAVING belongs after grouping rather than before it. A semicolon after SELECT would end the statement prematurely, and SQL does not require one field per physical line. Both LastName and FirstName already appear in the grouping, so the issue is the missing keyword separation, not an incomplete group list like the separate preceding example."
    },
    {
      "id": "db-266",
      "chapter": "depanare",
      "type": "dropdown",
      "question": "Evaluate each data-insertion statement. Select Yes if it contains a syntax error and No if it is syntactically valid.",
      "dragItems": [
        {
          "id": "a",
          "text": "Yes"
        },
        {
          "id": "b",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "INSERT * INTO Customers FROM CustomersNew;",
          "correctItemId": "a"
        },
        {
          "id": "z2",
          "label": "INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName FROM CustomersNew;",
          "correctItemId": "b"
        },
        {
          "id": "z3",
          "label": "INSERT INTO Customers SELECT * FROM CustomersNew;",
          "correctItemId": "b"
        }
      ],
      "explanation": "Yes / No / No, because this item asks whether a syntax error exists. INSERT * INTO Customers FROM CustomersNew is not valid INSERT ... SELECT syntax. The explicit-column statement correctly inserts the LastName and FirstName query values into the corresponding target columns. INSERT INTO Customers SELECT * FROM CustomersNew is also syntactically valid, although successful execution requires compatible destination/source columns and valid data. A runtime type, constraint or permission problem is different from a syntax error, so it must not reverse the last two selections."
    },
    {
      "id": "db-267",
      "chapter": "depanare",
      "type": "single",
      "question": "The UPDATE statement below fails. What change is required?",
      "code": "UPDATE Customers\nSET Status = 'Gold'\nIF TotalAmount > 10000;",
      "options": [
        "Move IF to the beginning of the statement.",
        "Replace IF with WHERE.",
        "Add semicolons after every line.",
        "Specify an object type after UPDATE."
      ],
      "correct": 1,
      "explanation": "Replace IF with WHERE. UPDATE Customers SET Status = 'Gold' WHERE TotalAmount > 10000 assigns Gold to qualifying rows. IF is a control-flow construct in SQL Server, not an inline row-filter clause after SET. Moving it without restructuring the statement would not supply the intended row predicate. Semicolons after every line are unnecessary and can break the statement, and UPDATE does not need TABLE inserted after it. The required correction is the clause that selects which existing records receive the assignment."
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Return customer names, OrderID, Subtotal and 5% sales tax for customers who placed orders. Which query satisfies every requirement?",
      "options": [
        "SELECT c.FirstName,c.LastName,o.OrderID,o.Subtotal,o.Subtotal*0.05 AS SalesTax FROM Customers c INNER JOIN Orders o ON c.CustomerID=o.CustomerID;",
        "SELECT c.FirstName,c.LastName,o.OrderID,o.Subtotal,o.Subtotal*0.05 AS SalesTax FROM Customers c LEFT JOIN Orders o ON c.CustomerID=o.CustomerID;",
        "SELECT c.FirstName,c.LastName,o.OrderID,o.Subtotal,o.Subtotal*1.05 AS SalesTax FROM Customers c INNER JOIN Orders o ON c.CustomerID=o.CustomerID;"
      ],
      "correct": 0,
      "explanation": "The first query uses INNER JOIN to return only matching customer/order rows and computes SalesTax as Subtotal × 0.05. That meets both the participation requirement and the five-percent calculation. LEFT JOIN could add customers who placed no orders, contrary to the clarified requirement. Multiplying by 1.05 returns the subtotal plus tax rather than the tax alone, so the third query labels the wrong amount as SalesTax. One customer can legitimately appear on several rows when several orders match; the requested output is order-level, not one row per customer.",
      "id": "db-268"
    },
    {
      "chapter": "proiectare",
      "type": "single",
      "question": "Which statement removes a direct UPDATE grant on employees from alpha in SQL Server?",
      "options": [
        "REVOKE UPDATE ON OBJECT::employees FROM alpha;",
        "DELETE UPDATE ON OBJECT::employees FROM alpha;",
        "REVOKE UPDATE FROM USER::alpha ON employees;",
        "DELETE UPDATE FROM USER::alpha ON employees;"
      ],
      "correct": 0,
      "explanation": "REVOKE UPDATE ON OBJECT::employees FROM alpha removes the direct UPDATE grant on that object. OBJECT:: identifies the securable class and employees names the object. DELETE is a row-changing operation, not a permission-removal action. The other REVOKE alternative places USER::alpha and the object in an invalid order for the required grant removal. As with any REVOKE of a direct grant, effective UPDATE permission could still arrive through a role or another grant; removing this grant is not the same as imposing an explicit DENY.",
      "id": "db-269"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Each call_log row contains one day and its call count. Which query returns the day with the fewest calls, breaking ties by earliest date?",
      "options": [
        "SELECT TOP (1) log_date, calls FROM call_log ORDER BY calls ASC, log_date ASC;",
        "SELECT log_date, MIN(calls) FROM call_log;",
        "SELECT log_date, MAX(calls) FROM call_log;",
        "SELECT log_date,calls FROM call_log ORDER BY calls DESC;"
      ],
      "correct": 0,
      "explanation": "SELECT TOP (1) log_date, calls FROM call_log ORDER BY calls ASC, log_date ASC returns the smallest call count and breaks ties with the earliest date. TOP limits the already ordered result to one row. A bare MIN(calls) beside an ungrouped date is invalid in SQL Server and does not reliably identify the corresponding day. MAX selects the opposite extreme. The descending-order option neither limits to one row nor puts the lowest count first. The one-row-per-day assumption also avoids an unstated need to aggregate several records per day.",
      "id": "db-270"
    },
    {
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Complete the query to return clients in both New Mexico and Roswell.",
      "dragItems": [
        {
          "id": "i1",
          "text": "SELECT *"
        },
        {
          "id": "i2",
          "text": "FROM clients"
        },
        {
          "id": "i3",
          "text": "WHERE State = 'New Mexico' AND City = 'Roswell'"
        },
        {
          "id": "i4",
          "text": "WHERE State = 'New Mexico' OR City = 'Roswell'"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Use SELECT *, FROM clients, then WHERE State = 'New Mexico' AND City = 'Roswell'. The conjunction requires both attributes on the same client row. The OR alternative would include every New Mexico client plus Roswell clients elsewhere, making it broader than the request. SELECT * projects all client columns and FROM names the source; neither alone supplies the location test. There is no need for a grouping or set-intersection operator when both conditions are available on each client record.",
      "id": "db-271"
    },
    {
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "Complete the INSERT for cookie 77, Snickerdoodle.",
      "dragItems": [
        {
          "id": "i1",
          "text": "INSERT INTO Cookies (Name, CookieID)"
        },
        {
          "id": "i2",
          "text": "VALUES ('Snickerdoodle',77);"
        },
        {
          "id": "i3",
          "text": "VALUES (77,'Snickerdoodle');"
        },
        {
          "id": "i4",
          "text": "UPDATE Cookies"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Use INSERT INTO Cookies (Name, CookieID) followed by VALUES ('Snickerdoodle',77). The explicit destination list reverses the table's physical declaration order, so values must follow Name first and CookieID second. The tuple (77,'Snickerdoodle') would be mapped to the wrong columns and can cause conversion failure. UPDATE Cookies changes existing data rather than adding this cookie and does not complete the shown INSERT structure. Correct value order follows the INSERT's column list, not automatically the CREATE TABLE column order.",
      "code": "CREATE TABLE Cookies (CookieID INTEGER, Name VARCHAR(20));\n[1]\n[2]",
      "id": "db-272"
    },
    {
      "chapter": "proiectare",
      "type": "multiple",
      "question": "Which two SQL Server types store both a date and a time of day? Choose two.",
      "options": [
        "DATETIME",
        "TIMESTAMP",
        "DATE",
        "SMALLDATETIME"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "DATETIME and SMALLDATETIME both store a date and time of day in SQL Server. They differ in range and precision; SMALLDATETIME is minute-precision, while DATETIME supports finer fractional-second increments. DATE stores only the calendar date. SQL Server TIMESTAMP is a synonym for rowversion, a generated binary version value, not a timestamp containing date and clock information. That dialect-specific meaning is why TIMESTAMP must not be selected here based on its English name or its meaning in another DBMS.",
      "id": "db-273"
    },
    {
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Which statement increases every Ticket price in Park by 10%?",
      "options": [
        "UPDATE Park SET Ticket = Ticket * 1.10;",
        "UPDATE Ticket SET Park = Ticket * 1.10;",
        "UPDATE Park SET Ticket = 0.10;",
        "UPDATE Park SET Ticket = increase 10%;"
      ],
      "correct": 0,
      "explanation": "UPDATE Park SET Ticket = Ticket * 1.10 increases every Ticket value by ten percent: 100% of the old price plus 10% equals a multiplier of 1.10. With no WHERE, all target rows are eligible. The second option confuses the table and column names. Setting Ticket to 0.10 replaces every price with a fixed amount instead of raising it by a percentage. increase 10% is not a valid T-SQL expression. Actual stored rounding depends on Ticket's data type and scale; no original prices are supplied to calculate specific results.",
      "id": "db-274"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query returns the customer count for each country with fewer than 50 customers? Assume CustomerID is non-NULL.",
      "options": [
        "SELECT COUNT(CustomerID),Country FROM Customers HAVING COUNT(CustomerID)<50 GROUP BY Country;",
        "SELECT Country,CustomerID FROM Customers WHERE COUNT(CustomerID)<50 GROUP BY Country;",
        "SELECT Country,CustomerID FROM Customers GROUP BY Country HAVING COUNT(CustomerID)<50;",
        "SELECT COUNT(CustomerID),Country FROM Customers GROUP BY Country HAVING COUNT(CustomerID)<50;"
      ],
      "correct": 3,
      "explanation": "The fourth query groups by Country, counts the non-NULL CustomerID values and uses HAVING to retain counts below 50. Because the question states CustomerID is non-NULL, this equals the customer-row count. HAVING before GROUP BY is the wrong clause order. An aggregate cannot serve as the row-level WHERE condition shown, and selecting CustomerID without grouping or aggregation is invalid for the requested country summary. The threshold is strict: a country with exactly 50 customers is excluded.",
      "id": "db-275"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A stored procedure can delete data.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A SQL Server function returns a scalar value or a table.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Every stored procedure must explicitly return a data value.",
          "correctItemId": "i2"
        }
      ],
      "explanation": "Yes / Yes / No. A stored procedure can execute DELETE when its security context and database rules allow it. A SQL Server function has a scalar or table-valued return contract. A procedure need not explicitly return application data; it may simply perform an action. Procedures can still have output parameters, result sets or integer status returns, but those possibilities do not make an explicit data return mandatory. The last statement is about the requirement to return data, not a claim that procedures can never return anything.",
      "id": "db-276"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which statement is DDL?",
      "options": [
        "ALTER TABLE Employee ADD EmployeeName VARCHAR(100);",
        "SELECT EmployeeName FROM Employee WHERE EmployeeID=1;",
        "INSERT INTO Employee(EmployeeID) VALUES(1);",
        "UPDATE Employee SET EmployeeName='Tia' WHERE EmployeeID=1;"
      ],
      "correct": 0,
      "explanation": "ALTER TABLE Employee ADD EmployeeName VARCHAR(100) is DDL because it modifies the table schema by defining a column. SELECT retrieves row values; INSERT adds a record; UPDATE changes a stored name. Those operations work with data rather than redefining the table structure. The classification does not depend on how many rows exist or whether the alteration requires rewriting stored pages. A schema command can affect existing storage while still being DDL because its direct purpose is to change an object's definition.",
      "id": "db-277"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "For a table clustered on OrderDate, choose the access patterns that typically benefit from that ordered structure.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Ranges of consecutive OrderDate values"
        },
        {
          "id": "i2",
          "text": "A scan of unrelated random names with no supporting index"
        },
        {
          "id": "i3",
          "text": "Sequential access along the clustered key"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A suitable filtering pattern",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A suitable key access pattern",
          "correctItemId": "i3"
        }
      ],
      "explanation": "Choose ranges of consecutive OrderDate values and sequential access along the clustered key. Those patterns can use the ordered leaf structure directly instead of repeatedly locating unrelated positions. A scan or filter on random unrelated names has no direct ordering benefit from OrderDate unless another suitable access path exists. This is a typical access-pattern advantage, not a guarantee that every range query is faster. The optimizer still considers selectivity and cost, and ORDER BY is required when the final display order must be guaranteed.",
      "id": "db-278"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which query returns orders placed from February 1, 2023 onward, excluding California?",
      "options": [
        "SELECT * FROM Orders WHERE order_date >= '2023-02-01' AND ship_state <> 'CA';",
        "SELECT * FROM Orders WHERE order_date >= '2023-02-01' OR ship_state <> 'CA';",
        "SELECT * FROM Orders WHERE order_date >= '2023-02-01' AND ship_state = 'CA';"
      ],
      "correct": 0,
      "explanation": "The first query requires order_date >= '2023-02-01' AND ship_state <> 'CA'. The inclusive date comparison keeps February 1 and later values, while the inequality excludes California. OR would allow a row merely because one requirement holds. The equality-to-CA alternative selects the state that should be excluded. A NULL ship_state does not satisfy <> 'CA', so it is also omitted under standard SQL logic; use an explicit NULL policy if unknown states should be included instead. The query does not implicitly infer a state from other fields.",
      "id": "db-279"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which operator combines two compatible query results and removes duplicate rows?",
      "options": [
        "TRUNCATE",
        "UNION",
        "EXCEPT",
        "JOIN"
      ],
      "correct": 1,
      "explanation": "UNION combines compatible query result sets and removes duplicate complete rows. JOIN combines columns from paired source rows rather than performing this vertical set combination. EXCEPT returns the first result minus the second, not their combined contents. TRUNCATE removes all rows from a table and is not a query-combination operator. If duplicate occurrences must be preserved, UNION ALL is the appropriate different operator. The input projections still need compatible column counts and data types for UNION to be valid.",
      "id": "db-280"
    },
    {
      "chapter": "extragere-date",
      "type": "single",
      "question": "Return students enrolled on or after June 1, 2024 OR students who graduated during calendar year 2024. Sort newest enrollment first.",
      "options": [
        "SELECT * FROM students WHERE enrollment_date >= '2024-06-01' OR (academic_status='Graduated' AND graduation_date >= '2024-01-01' AND graduation_date < '2025-01-01') ORDER BY enrollment_date DESC;",
        "SELECT * FROM students WHERE enrollment_date >= '2024-06-01' AND academic_status='Graduated' ORDER BY enrollment_date ASC;",
        "SELECT * FROM students WHERE enrollment_date >= '2024-06-01' OR graduation_date >= '2024-01-01' ORDER BY enrollment_date DESC;"
      ],
      "correct": 0,
      "explanation": "The first query correctly uses OR between the enrollment path and the 2024 graduation path. The graduation branch includes academic_status = 'Graduated' plus a half-open date interval ending before 2025-01-01, retaining all of calendar 2024. DESC sorts newest enrollment first. The second choice uses AND, making both conditions necessary, and sorts ascending. The third omits both the graduation-status test and the upper year boundary, so it can include graduates from later years and other incorrectly qualifying rows.",
      "id": "db-281"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete a view showing only ID, Name and Type for companies in Utah.",
      "dragItems": [
        {
          "id": "i1",
          "text": "CREATE VIEW CustomersUT AS"
        },
        {
          "id": "i2",
          "text": "CREATE VIEW CustomersUT"
        },
        {
          "id": "i3",
          "text": "SELECT ID, Name, Type FROM Company"
        },
        {
          "id": "i4",
          "text": "WHERE State = 'UT';"
        },
        {
          "id": "i5",
          "text": "HAVING State = 'UT';"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Line 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 2",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Line 3",
          "correctItemId": "i4"
        }
      ],
      "explanation": "Use CREATE VIEW CustomersUT AS, SELECT ID, Name, Type FROM Company, then WHERE State = 'UT'. AS links the view declaration to its defining query, the projection restricts the exposed columns and WHERE filters individual company rows. The CREATE VIEW fragment without AS is incomplete when followed by the selected SELECT. HAVING is not the correct ordinary row-filter clause for this non-aggregate query. The view name does not have to equal its source table name, so CustomersUT can validly read Company.",
      "id": "db-282"
    },
    {
      "chapter": "proiectare",
      "type": "single",
      "question": "An INSERT of MachineID=3,OperatorID=4 fails with a foreign-key conflict on FK_Assignment_Machine referencing dbo.Machine(ID). What is the cause?",
      "options": [
        "No Operator with ID 4",
        "MachineID 3 already appears in Assignment",
        "OperatorID 4 already appears in Assignment",
        "No referenced Machine row with ID 3"
      ],
      "correct": 3,
      "explanation": "The reported conflict names FK_Assignment_Machine and dbo.Machine(ID), so the missing referenced row is Machine ID 3. A missing Operator ID 4 would be associated with the operator foreign key instead. Repeated MachineID or OperatorID values in Assignment are normally allowed in a many-to-many design and do not by themselves violate a foreign key. A separate unique constraint could reject particular duplicates, but that is not the error reported. Diagnose the actual named constraint rather than assuming the insertion fails for every plausible design issue.",
      "code": "INSERT INTO Assignment(MachineID,OperatorID) VALUES(3,4);\n-- FK_Assignment_Machine references dbo.Machine(ID)",
      "id": "db-283"
    },
    {
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Which SQL Server table definition causes a unique index to be created to support a primary key?",
      "options": [
        "CREATE TABLE Employee (EmployeeID INTEGER DISTINCT);",
        "CREATE TABLE Employee (EmployeeID INTEGER PRIMARY KEY);",
        "CREATE TABLE Employee (EmployeeID INTEGER INDEX);",
        "CREATE TABLE Employee (EmployeeID INTEGER NULL);"
      ],
      "correct": 1,
      "explanation": "CREATE TABLE Employee (EmployeeID INTEGER PRIMARY KEY) declares a primary key, which SQL Server supports with an automatically created unique index if an appropriate supporting mechanism is required by the creation. DISTINCT is a SELECT modifier rather than the offered column constraint. INTEGER INDEX alone is not the valid primary-key declaration, and a nullable ordinary column does not enforce unique non-NULL identifiers. The supporting index is clustered by default in the ordinary case when no existing clustered design prevents that, but the key requirement here is its uniqueness support.",
      "id": "db-284"
    },
    {
      "id": "db-285",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which WHERE clause returns book titles containing the substring stone?",
      "options": [
        "WHERE bktitle IN ('%stone%')",
        "WHERE bktitle = '%stone%'",
        "WHERE bktitle LIKE 'stone'",
        "WHERE bktitle LIKE '%stone%'"
      ],
      "correct": 3,
      "explanation": "Use WHERE bktitle LIKE '%stone%'. The percent signs mean any sequence before and after stone, allowing the substring anywhere in the title. IN ('%stone%') and = '%stone%' treat the percent signs as literal characters rather than applying LIKE pattern matching. LIKE 'stone' without wildcards matches the whole string according to collation rules, not an arbitrary containing title. Case sensitivity also follows collation. The supplied SELECT already contains WHERE, so insert the condition there without duplicating the keyword when writing the final complete statement.",
      "code": "SELECT bktitle, price FROM books\n[condition];"
    },
    {
      "id": "db-286",
      "chapter": "extragere-date",
      "type": "single",
      "question": "Which aggregate function returns the highest daily sales amount?",
      "options": [
        "VALUES",
        "MOST",
        "MAX",
        "HIGH"
      ],
      "correct": 2,
      "explanation": "MAX returns the largest value in the selected sales expression or group. It does not add values or count them. VALUES is a SQL row-constructor keyword rather than an aggregate that finds the highest amount, and MOST and HIGH are not the SQL Server aggregate names for this purpose. If the data contains several transactions per day and the request is for the highest daily total, first aggregate by day and then take the maximum; MAX alone answers highest daily amount when those daily amounts are already represented in the input."
    },
    {
      "id": "db-287",
      "chapter": "ddl-obiecte",
      "type": "single",
      "question": "Create a reusable virtual table of active research projects, queryable with SELECT * FROM active_projects. Which statement is correct?",
      "options": [
        "CREATE PROCEDURE active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';",
        "INSERT PROCEDURE active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';",
        "CREATE VIEW active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';",
        "INSERT VIEW active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active';"
      ],
      "correct": 2,
      "explanation": "CREATE VIEW active_projects AS SELECT projectid, projectname FROM projects WHERE status = 'Active' creates the reusable virtual table queryable with SELECT * FROM active_projects. CREATE PROCEDURE would create an executable routine normally invoked with EXEC, not the requested selectable view. INSERT PROCEDURE and INSERT VIEW are not valid object-creation forms. The WHERE predicate limits the regular view to currently matching source rows; it does not save a historical copy of projects that happened to be active when the view was created."
    },
    {
      "id": "db-288",
      "chapter": "ddl-obiecte",
      "type": "drag_drop",
      "question": "Arrange the SQL Server scalar function that adds 7% sales tax. Assume Orders contains exactly one row per OrderID.",
      "explanation": "Use the six fragments in their listed functional order: declaration, BEGIN, variable declaration, filtered SELECT assignment, RETURN and END. Multiplying subtotal by 1.07 returns the original 100% plus 7% tax, not merely the tax amount. DECIMAL(12,2) gives the declared result two decimal places, with assignment rounding subject to SQL Server numeric rules. The one-row-per-OrderID assumption prevents ambiguous multiple assignments. If no matching order exists, the initially NULL variable remains NULL. The declaration defines a scalar function, so callers use a schema-qualified scalar invocation such as dbo.grand_total(...).",
      "dragItems": [
        {
          "id": "i1",
          "text": "CREATE FUNCTION grand_total(@orderid INT) RETURNS DECIMAL(12,2) AS"
        },
        {
          "id": "i2",
          "text": "BEGIN"
        },
        {
          "id": "i3",
          "text": "DECLARE @grandtotal DECIMAL(12,2);"
        },
        {
          "id": "i4",
          "text": "SELECT @grandtotal = subtotal * 1.07 FROM orders WHERE orderid = @orderid;"
        },
        {
          "id": "i5",
          "text": "RETURN @grandtotal;"
        },
        {
          "id": "i6",
          "text": "END;"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Step 1",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Step 2",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Step 3",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Step 4",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Step 5",
          "correctItemId": "i5"
        },
        {
          "id": "z6",
          "label": "Step 6",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "db-289",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "How many rows are updated by this statement in the table shown?",
      "options": [
        "1",
        "2",
        "0",
        "3"
      ],
      "correct": 0,
      "explanation": "One row is updated: ID 2 is both Shirt and Blue. ID 1 is Shirt but Red, so it fails the color requirement. ID 3 is Blue but Pants, so it fails the clothing requirement. AND requires both predicates on the same row; using OR would instead target all three shown records. The matched row's Price changes from 44.99 to 49.99. The alternatives two, zero and three do not follow the displayed conjunction, and the statement is not inserting an additional product.",
      "code": "UPDATE Products SET Price = 49.99 WHERE Clothing = 'Shirt' AND Color = 'Blue';",
      "image": "assets/databases/pdf-003-products-clothing.png",
      "imageAlt": "products clothing"
    },
    {
      "id": "db-290",
      "chapter": "proiectare",
      "type": "single",
      "question": "Assume EventID determines Event and Winner, and Winner determines Birthdate. Which non-key column should be moved to a Winner table to eliminate the transitive dependency?",
      "options": [
        "Winner",
        "EventID",
        "Birthdate",
        "Event"
      ],
      "correct": 2,
      "explanation": "Move Birthdate to a Winner table. The stated dependencies are EventID → Winner and Winner → Birthdate, so the birthdate depends transitively on the event key through the winner. Keeping it with every event repeats the same winner-level fact when that person wins again. Winner remains the reference associating the event with its victor. EventID identifies the event record and Event is its event-level description; moving either would not specifically remove this birthdate dependency. The explicit dependency matters more than coincidental uniqueness in the two sample rows.",
      "image": "assets/databases/pdf-004-event-winners.png",
      "imageAlt": "event winners"
    },
    {
      "id": "db-291",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Complete the statements about the Student schema shown. Assume StudentID is assigned uniquely to each student.",
      "explanation": "StudentID is the primary-key candidate under the stated uniqueness assignment, and 1234567 is the valid seven-character example. The schema declares the identifier as CHAR(7); 12345678 contains eight characters and exceeds the intended width. NULL is incompatible with a primary key. Lastname and Firstname are descriptive attributes that can be shared by different students, so neither is established as a unique identifier. A character identifier need not be an arithmetic number even when the example uses digits; leading zeroes and exact representation can matter.",
      "image": "assets/databases/pdf-001-student-schema.png",
      "imageAlt": "student schema",
      "dragItems": [
        {
          "id": "i1",
          "text": "StudentID"
        },
        {
          "id": "i2",
          "text": "Lastname"
        },
        {
          "id": "i3",
          "text": "Firstname"
        },
        {
          "id": "i4",
          "text": "1234567"
        },
        {
          "id": "i5",
          "text": "12345678"
        },
        {
          "id": "i6",
          "text": "NULL"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Primary key",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A valid seven-character StudentID",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "db-292",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "Both tables have compatible column order and types. Insert all potential customers into the existing Customers table. Which statement is valid?",
      "options": [
        "INSERT INTO customers SELECT * FROM potential_customers;",
        "INSERT INTO customers VALUES SELECT * FROM potential_customers;",
        "INSERT INTO customers WHERE * FROM potential_customers;",
        "SELECT * INTO customers FROM potential_customers;"
      ],
      "correct": 0,
      "explanation": "INSERT INTO customers SELECT * FROM potential_customers appends the source rows to the existing Customers table. The question explicitly supplies compatible order and types, which makes the wildcard-based mapping valid here. VALUES cannot be placed before this SELECT source, and WHERE * is not an insertion source. SELECT * INTO customers FROM potential_customers creates a new table and therefore is not the correct way to append to an existing one. Real constraints, duplicates and permissions can still affect execution, but those are distinct from the offered syntactic choice."
    },
    {
      "id": "db-293",
      "chapter": "extragere-date",
      "type": "multiple",
      "question": "Return one row per enrolled class, showing lastname, firstname, and classID under the alias Classes. Which two queries are valid?",
      "options": [
        "SELECT lastname, firstname, classID Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;",
        "SELECT lastname, firstname, classID NAME Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;",
        "SELECT lastname, firstname, classID ALIAS Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;",
        "SELECT lastname, firstname, classID AS Classes FROM students INNER JOIN classes ON students.studentid = classes.studentID;"
      ],
      "correct": [
        0,
        3
      ],
      "explanation": "The first and fourth queries are valid: SQL Server allows a column alias either directly after the expression or after AS. Thus classID Classes and classID AS Classes produce the requested output label. NAME and ALIAS are not the alias-introducing keywords in these SELECT expressions. The INNER JOIN matches each student to their class/enrollment rows using studentID and returns one result for each match. An alias changes the result-column heading; it does not rename the underlying stored column or aggregate several classIDs into one value."
    },
    {
      "id": "db-294",
      "chapter": "extragere-date",
      "type": "single",
      "question": "In SQL Server, return distinct lastname/firstname rows that occur in both CurrentStudents and ArchivedStudents. Which operator is appropriate?",
      "options": [
        "INTERSECT ALL",
        "UNION",
        "UNION ALL",
        "INTERSECT"
      ],
      "correct": 3,
      "explanation": "INTERSECT returns distinct lastname/firstname combinations present in both CurrentStudents and ArchivedStudents. UNION returns distinct rows from either list, and UNION ALL preserves all occurrences, so neither isolates only the overlap. SQL Server does not support INTERSECT ALL, which is why a generic multiset interpretation cannot justify that choice here. The match concerns the selected pair of name fields, not proof that the records refer to the same individual; identical names can belong to different people unless an identifier is also compared."
    },
    {
      "id": "db-295",
      "chapter": "ddl-obiecte",
      "type": "dropdown",
      "question": "Complete the Campers table definition to store the shown IDs, group names and whole-number cabin identifiers. Store ID and Cabin as integers and Name as variable-length character text.",
      "explanation": "Use CREATE TABLE Campers (, ID INT, Name VARCHAR(25) and Cabin INT before the supplied closing parenthesis. The restored source data shows numeric IDs, names such as Chipmunks and whole-number cabin identifiers 10, 11 and 12; the clarified requirement explicitly keeps the cabin identifier numeric. CREATE Campers omits TABLE. ProductID names the wrong requested column. Cabin VARCHAR(25) could hold digit characters but would model the field as text rather than the specified integer. The definition does not automatically add a primary key or other constraints beyond the selected fragments.",
      "code": "-- Source sample: ID | Name | Cabin\n-- 1 | Chipmunks | 10\n-- 2 | Squirrels | 11\n-- 3 | Bears | 12\n[1]\n  [2],\n  [3],\n  [4]\n);",
      "dragItems": [
        {
          "id": "i1",
          "text": "CREATE TABLE Campers ("
        },
        {
          "id": "i2",
          "text": "CREATE Campers ("
        },
        {
          "id": "i3",
          "text": "ID INT"
        },
        {
          "id": "i4",
          "text": "ProductID INT"
        },
        {
          "id": "i5",
          "text": "Name VARCHAR(25)"
        },
        {
          "id": "i6",
          "text": "Cabin INT"
        },
        {
          "id": "i7",
          "text": "Cabin VARCHAR(25)"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Opening statement",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "First column",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Second column",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Third column",
          "correctItemId": "i6"
        }
      ]
    },
    {
      "id": "db-296",
      "chapter": "proiectare",
      "type": "single",
      "question": "What type of primary key uses both studentID and classID together?",
      "options": [
        "Foreign key",
        "Composite primary key",
        "A single-column primary key",
        "A non-unique index"
      ],
      "correct": 1,
      "explanation": "This is a composite primary key because studentID and classID jointly identify each signup. The pair must be unique and neither component can be NULL, while the same student can sign up for different classes and the same class can contain different students. A foreign key describes a reference to another eligible key and is a separate possible constraint. A single-column primary key uses only one attribute. A non-unique index may improve access but would not enforce the pairwise uniqueness declared by PRIMARY KEY (studentID, classID).",
      "code": "CREATE TABLE Signups (\n studentID INT NOT NULL,\n classID INT NOT NULL,\n signupdate DATETIME,\n PRIMARY KEY (studentID, classID)\n);"
    },
    {
      "id": "db-297",
      "chapter": "manipulare-date",
      "type": "single",
      "question": "The UPDATE statement belongs to which category?",
      "options": [
        "DQL",
        "DCL",
        "DDL",
        "DML"
      ],
      "correct": 3,
      "explanation": "UPDATE belongs to DML, Data Manipulation Language, because it changes existing row values. DDL defines or changes schema objects, for example CREATE TABLE or ALTER TABLE. DCL concerns permission operations such as GRANT and REVOKE. DQL is the course label often used for retrieval with SELECT, not UPDATE. Taxonomies differ on whether SELECT is included in DML, but they do not change UPDATE's classification. Its optional WHERE clause controls which rows change rather than converting the statement into a query-only operation."
    },
    {
      "id": "db-298",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "Yes / Yes / Yes / No. A foreign key may reference another table's primary key. A NULL single-column reference identifies no parent through that key and is permitted when the column is nullable. Related key values can be used to join rows, although SQL joins do not require a declared foreign key. Foreign-key values need not be unique: several orders may reference the same customer. This second statement uses the single-column NULL case; composite foreign-key NULL rules need separate consideration rather than assuming every partial-null combination identifies a parent.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "A foreign key can reference a primary key in another table.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A NULL single-column foreign-key value means that row identifies no parent through that key.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Foreign keys can be used to join related rows.",
          "correctItemId": "i1"
        },
        {
          "id": "z4",
          "label": "Foreign-key values must always be unique.",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "db-299",
      "chapter": "extragere-date",
      "type": "single",
      "question": "The subquery returns two distinct EmployeeID values. EmployeeID is non-NULL. How many rows does this query return?",
      "options": [
        "NULL",
        "3",
        "0",
        "2"
      ],
      "correct": 2,
      "explanation": "Zero rows are returned. For EmployeeID = ALL to be TRUE, one outer EmployeeID must equal every returned identifier. The subquery contains two distinct non-NULL IDs, so no single non-NULL value can equal both. This is not a count of the subquery's two rows; using ANY or IN would express matching either of them. The outer query returns an empty result set, not a row containing NULL. An empty subquery would have different ALL semantics, but the question explicitly rules that case out.",
      "code": "SELECT LastName, FirstName\nFROM Employees\nWHERE EmployeeID = ALL (\n  SELECT EmployeeID\n  FROM Sales\n  WHERE Amount > 50000\n);"
    },
    {
      "id": "db-300",
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "For each statement, select Yes if it is true and No if it is false.",
      "explanation": "No / Yes / Yes. REMOVE is not the SQL Server command for this operation. DELETE removes table rows and can use a WHERE predicate. TRUNCATE TABLE empties the table by deallocating data pages rather than logging a separate deletion for every record, while preserving the table definition. That does not mean it is unlogged or cannot be rolled back. Both DELETE without WHERE and TRUNCATE can empty a table, but their filtering, logging, identity and constraint behavior differ. DROP, not either of these row-removal operations, removes the table object itself.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "REMOVE is the SQL Server statement for deallocating all table contents.",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "DELETE removes rows from a table.",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "TRUNCATE TABLE removes all rows by deallocating pages, without logging each individual row deletion.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "db-301",
      "chapter": "proiectare",
      "type": "dropdown",
      "question": "Complete the statements about the displayed database diagram. No direct line joins Customer to Transaction.",
      "explanation": "The mappings are No direct relationship is drawn, Foreign key and Entity-relationship. The diagram links Customer to CustomerAccount, CustomerAccount to Account, and Transaction to Account; it does not show a direct Customer–Transaction edge. Transaction.AccountID references Account.AccountID, while TransactionID is the transaction table's primary key. Customers and transactions can be related indirectly through accounts, but that is not the direct line the first blank asks about. This is a database entity/relationship diagram, not a network topology showing devices and communications links.",
      "image": "assets/databases/pdf-006-customer-account-erd.png",
      "imageAlt": "customer account erd",
      "dragItems": [
        {
          "id": "i1",
          "text": "No direct relationship is drawn"
        },
        {
          "id": "i2",
          "text": "One-to-one"
        },
        {
          "id": "i3",
          "text": "Foreign key"
        },
        {
          "id": "i4",
          "text": "Primary key"
        },
        {
          "id": "i5",
          "text": "Entity-relationship"
        },
        {
          "id": "i6",
          "text": "Network topology"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "Relationship drawn directly between Customer and Transaction",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "AccountID in Transaction",
          "correctItemId": "i3"
        },
        {
          "id": "z3",
          "label": "Diagram type",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "db-302",
      "chapter": "extragere-date",
      "type": "dropdown",
      "question": "Count rows returned by these joins using the three displayed tables.",
      "explanation": "The first query returns 2 rows: the Assignment rows connect MachineID 1 and 2 to Packing Machine and Painting Machine. Wrapping Machine has no assignment and is excluded by INNER JOIN. The second query returns 3 rows: Barry P and Heidi S each have one matching assignment, while Nina V has none and is retained by LEFT JOIN with NULL assignment columns. The results are counts of joined rows, not unique names in general. With several assignments per operator, the left join could exceed the number of operators, but the displayed data has only these two assignments.",
      "code": "SELECT Machine.Name FROM Machine\nJOIN Assignment ON Assignment.MachineID = Machine.ID;\n\nSELECT Operator.Name FROM Operator\nLEFT JOIN Assignment ON Assignment.OperatorID = Operator.ID;",
      "image": "assets/databases/pdf-059-machine-operator-data.png",
      "imageAlt": "machine operator data",
      "dragItems": [
        {
          "id": "i1",
          "text": "1"
        },
        {
          "id": "i2",
          "text": "2"
        },
        {
          "id": "i3",
          "text": "3"
        },
        {
          "id": "i4",
          "text": "4"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "First query (Machine INNER JOIN Assignment)",
          "correctItemId": "i2"
        },
        {
          "id": "z2",
          "label": "Second query (Operator LEFT JOIN Assignment)",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "db-303",
      "chapter": "manipulare-date",
      "type": "dropdown",
      "question": "Evaluate each statement independently in SQL Server. Select Yes if its syntax is valid and No otherwise. Assume CustomersNew exists, the target is new for SELECT INTO, and the target already exists with compatible columns for INSERT SELECT.",
      "explanation": "Yes / No / Yes under the clarified syntactic-validity instructions. SELECT * INTO Customers FROM CustomersNew is valid T-SQL for creating a new Customers table from the source; it requires that target not already exist. INSERT * INTO Customers FROM CustomersNew is invalid syntax. INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName FROM CustomersNew is valid for an existing compatible target. Each statement is assessed independently under its applicable target-existence and compatibility prerequisites; otherwise a syntax question could be confused with an unstated runtime-state question.",
      "dragItems": [
        {
          "id": "i1",
          "text": "Yes"
        },
        {
          "id": "i2",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z1",
          "label": "SELECT * INTO Customers FROM CustomersNew;",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "INSERT * INTO Customers FROM CustomersNew;",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "INSERT INTO Customers (LastName, FirstName) SELECT LastName, FirstName FROM CustomersNew;",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "db-304",
      "chapter": "depanare",
      "type": "single",
      "question": "Assume the database supports instantaneous copy-on-write storage snapshots. Which listed operation is usually quickest to create because it initially records metadata instead of copying every data page?",
      "explanation": "Snapshot is the quickest to create under the explicit instantaneous copy-on-write storage assumption because it initially establishes a point-in-time view and metadata rather than copying every source page. Full copies the complete backup scope; differential and incremental methods still need to identify and save their applicable changes. A storage snapshot is not automatically an independent backup: it can depend on the original storage and may not protect against loss of that system. Its speed and protection differ from a full copy, so this answer must not be generalized to every product called snapshot.",
      "options": [
        "Incremental",
        "Differential",
        "Snapshot",
        "Full"
      ],
      "correct": 2
    }
  ]
};
