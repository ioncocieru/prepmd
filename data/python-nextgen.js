/* Prep. practice content; source inconsistencies corrected for Python 3. */
window.EXAM_DATA = window.EXAM_DATA || {};
window.EXAM_DATA.pythonNextGen = {
  "id": "pythonNextGen",
  "name": "Python Next Generation",
  "description": "Python cu întrebări și laburi interactive. Alege teoria, practica sau simularea combinată.",
  "accent": "#2f6fed",
  "hasLabs": true,
  "CHAPTERS": [
    {
      "id": "moldova-scenarios",
      "name": "Python in Moldova — Applied Scenarios"
    },
    {
      "id": "fundamentals-1",
      "name": "Python Fundamentals — Part 1"
    },
    {
      "id": "fundamentals-2",
      "name": "Python Fundamentals — Part 2"
    },
    {
      "id": "practice-1",
      "name": "Python Practice — Core Skills"
    },
    {
      "id": "practice-2",
      "name": "Python Practice — Applied Skills"
    },
    {
      "id": "labs",
      "name": "Python Programming Labs"
    },
    {
      "id": "script-labs",
      "name": "Python Script Labs"
    }
  ],
  "QUESTIONS": [
    {
      "id": "png-q031",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is developing a wine quality classifier for a winery in Cricova, Moldova. Assume wine_score is an integer from 0 through 100. Categories: 90–100 A (Tezaur); 80–89 B (Rezerva); 70–79 C (Vinoteca); 65–69 D (Standard); 0–64 F (Industrial). Complete one mutually exclusive decision chain. For example, 92 must produce Category: A and 85 Category: B.",
      "explanation": "The chain starts with if wine_score >= 90:, followed by elif thresholds 80, 70 and 65. Python executes only the first matching branch, so a score that reaches the 80 test is already below 90. Inclusive >= includes boundary scores 90, 80, 70 and 65. Using > incorrectly excludes those boundaries. Independent if statements can overwrite a category, and the final else would belong only to the last if; they do not implement this mutually exclusive chain. Starting with elif is invalid without a preceding if. The final print is included so the program actually produces the required output.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "if wine_score >= 90:"
        },
        {
          "id": "i0_1",
          "text": "elif wine_score >= 90:"
        },
        {
          "id": "i0_2",
          "text": "if wine_score > 90:"
        },
        {
          "id": "i0_3",
          "text": "elif wine_score >= 80:"
        },
        {
          "id": "i0_4",
          "text": "if wine_score >= 80 and wine_score < 90:"
        },
        {
          "id": "i0_5",
          "text": "if wine_score <= 90:"
        },
        {
          "id": "i1_0",
          "text": "elif wine_score >= 80:"
        },
        {
          "id": "i1_1",
          "text": "if wine_score >= 80:"
        },
        {
          "id": "i1_2",
          "text": "if wine_score >= 80 and wine_score < 90:"
        },
        {
          "id": "i1_3",
          "text": "elif wine_score >= 70:"
        },
        {
          "id": "i1_4",
          "text": "if wine_score >= 90:"
        },
        {
          "id": "i1_5",
          "text": "elif wine_score > 80:"
        },
        {
          "id": "i2_0",
          "text": "elif wine_score >= 70:"
        },
        {
          "id": "i2_1",
          "text": "if wine_score >= 70:"
        },
        {
          "id": "i2_2",
          "text": "if wine_score >= 70 and wine_score < 80:"
        },
        {
          "id": "i2_3",
          "text": "elif wine_score >= 65:"
        },
        {
          "id": "i2_4",
          "text": "if wine_score >= 80:"
        },
        {
          "id": "i2_5",
          "text": "elif wine_score > 70:"
        },
        {
          "id": "i3_0",
          "text": "elif wine_score >= 65:"
        },
        {
          "id": "i3_1",
          "text": "if wine_score >= 65:"
        },
        {
          "id": "i3_2",
          "text": "if wine_score >= 65 and wine_score < 70:"
        },
        {
          "id": "i3_3",
          "text": "elif wine_score >= 60:"
        },
        {
          "id": "i3_4",
          "text": "if wine_score >= 70:"
        },
        {
          "id": "i3_5",
          "text": "elif wine_score > 65:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Dropdown 1",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3",
            "i0_4",
            "i0_5"
          ]
        },
        {
          "id": "z1",
          "label": "Dropdown 2",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3",
            "i1_4",
            "i1_5"
          ]
        },
        {
          "id": "z2",
          "label": "Dropdown 3",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3",
            "i2_4",
            "i2_5"
          ]
        },
        {
          "id": "z3",
          "label": "Dropdown 4",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2",
            "i3_3",
            "i3_4",
            "i3_5"
          ]
        }
      ],
      "code": "# Cricova Wine Quality Classifier\nwine_score = int(input(\"Enter the wine quality score: \"))\n[1]\n    category = \"A\"\n[2]\n    category = \"B\"\n[3]\n    category = \"C\"\n[4]\n    category = \"D\"\nelse:\n    category = \"F\"\nprint(\"Category:\", category)"
    },
    {
      "id": "png-q032",
      "chapter": "moldova-scenarios",
      "type": "single",
      "question": "Voitcovschi Vladislav is writing a registration-kiosk script for Start-up City Cahul. Which line 02 reads the participant’s startup name into startup_name?",
      "explanation": "input() calls the input function and returns the entered text; assignment stores that string in startup_name for the next print. input(startup_name) tries to evaluate a name that has not yet been initialized and uses it as a prompt. startup_name = input stores the function object rather than reading a value. input(\"startup_name\") displays that literal prompt but discards the returned string because there is no assignment.",
      "options": [
        "input(startup_name)",
        "startup_name = input",
        "startup_name = input()",
        "input(\"startup_name\")"
      ],
      "correct": 2,
      "code": "01 print(\"Enter your startup name:\")\n02 [your line here]\n03 print(startup_name)"
    },
    {
      "id": "png-q033",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is displaying rotating specials at Vatra Neamului in Chișinău. Assume the locale uses English weekday names. Complete line 04 with the current date/time, line 05 with the full weekday name, and line 15 with the number of days until Sunday (0 on Sunday).",
      "explanation": "datetime.datetime.now() returns a datetime instance containing the current local date and time. datetime.date() without year/month/day arguments is invalid, and new date() is not Python syntax. strftime(\"%A\") produces the full weekday name in the active locale; %B is the full month name and %Y the year. weekday() on the instance returns Monday=0 through Sunday=6, so 6 - current_dt.weekday() gives 6 on Monday and 0 on Sunday. day_name is a string, not a date instance, and calling the unbound weekday method without an instance is invalid.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "current_dt = datetime.date()"
        },
        {
          "id": "i0_1",
          "text": "current_dt = datetime.datetime.now()"
        },
        {
          "id": "i0_2",
          "text": "current_dt = new date()"
        },
        {
          "id": "i1_0",
          "text": "day_name = current_dt.strftime(\"%A\")"
        },
        {
          "id": "i1_1",
          "text": "day_name = current_dt.strftime(\"%B\")"
        },
        {
          "id": "i1_2",
          "text": "day_name = current_dt.strftime(\"%Y\")"
        },
        {
          "id": "i2_0",
          "text": "days_remaining = day_name - day_name.weekday()"
        },
        {
          "id": "i2_1",
          "text": "days_remaining = 6 - current_dt.weekday()"
        },
        {
          "id": "i2_2",
          "text": "days_remaining = 6 - datetime.datetime.weekday()"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 04",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Line 05",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Line 15",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ],
      "code": "import datetime\ntraditional_menu = (\"Zeama\", \"Mamaliga cu Branza\", \"Placinte cu Cartofi\")\nfestive_menu = (\"Sarmale\", \"Rata la Cuptor\", \"Friptura de Miel\")\n[1]  # line 04\n[2]  # line 05\nprint(\"Vatra Neamului - Daily Specials\")\nif day_name in (\"Friday\", \"Saturday\", \"Sunday\"):\n    print(\"The festive weekend menu includes:\")\n    for dish in festive_menu:\n        print(dish)\nelse:\n    print(\"The traditional weekday menu includes:\")\n    for dish in traditional_menu:\n        print(dish)\n[3]  # line 15\nprint(f\"Specials rotation in {days_remaining} days\")"
    },
    {
      "id": "png-q034",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "For each statement about datetime.strftime() directives, select Yes if true and No if false.",
      "explanation": "%H is the hour on a 24-hour clock, 00–23. A 12-hour hour uses %I, and %p supplies AM/PM in a locale that supports those markers. %a is the abbreviated weekday, while %A is the full weekday; both are locale-dependent. %M means minutes, 00–59. The numeric month is lowercase %m, 01–12. Case is significant: these directives are not interchangeable.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        },
        {
          "id": "i3_0",
          "text": "Yes"
        },
        {
          "id": "i3_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "%H displays a 12-hour clock with AM/PM, such as 03 PM.",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "%a displays an abbreviated weekday name, such as Mon or Fri in an English locale.",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "%M displays the month number, such as 01 for January.",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        },
        {
          "id": "z3",
          "label": "%A displays the full weekday name, such as Monday in an English locale.",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1"
          ]
        }
      ]
    },
    {
      "id": "png-q035",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is debugging sector salary statistics for Moldova. Include every salary exactly once and compute the arithmetic mean. Complete the loop range and retain the correct averaging operation. The original shortened range skipped the final salary; its existing division formula was already correct.",
      "explanation": "range(len(sector_salaries)) yields indices 0, 1, 2 and 3. The original range(0, len(...)-1) stops before 3, omitting the final 45,000 salary. Adding 1 would eventually index past the list and raise IndexError. size is not the required built-in; len returns the list length. Division of the sum by the count computes the arithmetic mean: the full total is 215000 and the mean is 53750.0. Multiplication and exponentiation do not compute a mean. Contrary to the original wording, the supplied total_val / counter formula was not itself an error.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "(size(sector_salaries)):"
        },
        {
          "id": "i0_1",
          "text": "(size(sector_salaries)-1):"
        },
        {
          "id": "i0_2",
          "text": "(len(sector_salaries)+1):"
        },
        {
          "id": "i0_3",
          "text": "(len(sector_salaries)):"
        },
        {
          "id": "i1_0",
          "text": "total_val / counter"
        },
        {
          "id": "i1_1",
          "text": "total_val ** counter"
        },
        {
          "id": "i1_2",
          "text": "total_val * counter"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Loop range arguments",
          "correctItemId": "i0_3",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Average expression",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ],
      "code": "sector_salaries = [15000, 120000, 35000, 45000]\ncounter = 0\ntotal_val = 0\nfor index in range[1]\n    counter += 1\n    total_val += sector_salaries[index]\naverage_salary = [2]\nprint(\"The total payroll is:\", total_val)\nprint(\"The average salary is:\", average_salary)"
    },
    {
      "id": "png-q036",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is calculating costume rentals at Orheiul Vechi Cultural Center. The rate is 200 MDL/day. A late return (N) adds one charged day. A Sunday start gives 30% off the full charge; Thursday gives 50% off. Complete the comparisons. Assume valid Y/N input.",
      "explanation": "lower() makes an N answer become \"n\", so == \"n\" identifies a late return and adds one day before calculating the fee. Testing == \"y\" or != \"n\" would charge the extra day to the wrong group. == compares day-name values. is compares object identity and must not be used to test string contents; >= and <= compare strings lexicographically, not calendar days. A 30% discount leaves 70%, hence *0.7; a 50% discount leaves *0.5. For example, a two-day Sunday rental returned late costs 3*200*0.7 = 420 MDL.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "!= \"n\":"
        },
        {
          "id": "i0_1",
          "text": "== \"n\":"
        },
        {
          "id": "i0_2",
          "text": "== \"y\":"
        },
        {
          "id": "i1_0",
          "text": "== \"Sunday\":"
        },
        {
          "id": "i1_1",
          "text": ">= \"Sunday\":"
        },
        {
          "id": "i1_2",
          "text": "is \"Sunday\":"
        },
        {
          "id": "i2_0",
          "text": "== \"Thursday\":"
        },
        {
          "id": "i2_1",
          "text": "<= \"Thursday\":"
        },
        {
          "id": "i2_2",
          "text": "is \"Thursday\":"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Late-return condition",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Sunday comparison",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Thursday comparison",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ],
      "code": "returned_ontime = input(\"Returned before 6 PM? Y or N: \").lower()\ndays_rented = int(input(\"How many days? \"))\nrental_day = input(\"Rental start day: \").capitalize()\ndaily_rate = 200\nif returned_ontime [1]\n    days_rented += 1\nif rental_day [2]\n    total_cost = days_rented * daily_rate * 0.7\nelif rental_day [3]\n    total_cost = days_rented * daily_rate * 0.5\nelse:\n    total_cost = days_rented * daily_rate\nprint(\"Total cost for the costume rental is: MDL\", total_cost)"
    },
    {
      "id": "png-q037",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is documenting ordinary Python try statements for a Chișinău team. Evaluate the syntax rules.",
      "explanation": "Multiple except clauses can handle different exception types in order; put more specific handlers before broad ones. try/finally is valid without except and performs cleanup while allowing an unhandled exception to propagate. try/except/finally is also valid. A single try statement has at most one finally clause at that level. Nested try statements may each have their own finally, but that is not multiple finally clauses on one statement.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        },
        {
          "id": "i3_0",
          "text": "Yes"
        },
        {
          "id": "i3_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "A single try statement can contain multiple except clauses.",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "A try clause can be followed by finally without any except clause.",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "A single try statement can contain except clauses and a finally clause.",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        },
        {
          "id": "z3",
          "label": "A single try statement can have multiple finally clauses at the same structural level.",
          "correctItemId": "i3_1",
          "optionIds": [
            "i3_0",
            "i3_1"
          ]
        }
      ]
    },
    {
      "id": "png-q038",
      "chapter": "moldova-scenarios",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is assigning hackathon participants to university labs. Which TWO complete code segments correctly call the function? Assume the entered year is valid integer text and no other variables have been defined.",
      "explanation": "The first segment defines full_name and current_year, passes the participant positionally and study_year by its correct keyword. The literal call also provides the two required arguments in parameter order. The second segment passes undefined names participant and year, raising NameError under the stated assumptions. The final segment uses name=, but the function parameter is participant, so it raises TypeError for an unexpected keyword. Year 6 intentionally takes the fallback Info Desk branch.",
      "options": [
        "full_name = input('Enter your full name: ')\ncurrent_year = 0\nwhile current_year not in (1, 2, 3, 4, 5, 6):\n    current_year = int(input('Enter your year of study (1-6): '))\nassign_lab(full_name, study_year=current_year)",
        "full_name = input('Enter your full name: ')\ncurrent_year = 0\nwhile current_year not in (1, 2, 3, 4, 5, 6):\n    current_year = int(input('Enter your year of study (1-6): '))\nassign_lab(participant, year)",
        "assign_lab('Sandu Grecu', 3)",
        "assign_lab(study_year=4, name='Elena Vieru')"
      ],
      "correct": [
        0,
        2
      ],
      "code": "def assign_lab(participant, study_year):\n    \"\"\"Assign labs to university students.\"\"\"\n    if study_year == 1:\n        print(f\"{participant.title()}, please proceed to Lab 101 (Block 3)\")\n    elif study_year == 2:\n        print(f\"{participant.title()}, please proceed to Lab 202 (Block 3)\")\n    elif study_year == 3:\n        print(f\"{participant.title()}, please proceed to Lab 305 (Block 6)\")\n    elif study_year == 4:\n        print(f\"{participant.title()}, please proceed to Lab 410 (Block 6)\")\n    elif study_year == 5:\n        print(f\"{participant.title()}, please proceed to the Master's Hall\")\n    else:\n        print(f\"{participant.title()}, please check in at the Info Desk\")"
    },
    {
      "id": "png-q039",
      "chapter": "moldova-scenarios",
      "type": "multiple",
      "question": "Voitcovschi Vladislav needs an average loan amount with an INTEGER result and no fractional part. Assume total_disbursed_mdl and member_count are non-negative integers, member_count > 0, and values are small enough for exact integer conversion. Which TWO expressions satisfy this requirement?",
      "explanation": "For these non-negative, small integer inputs, int(total/member_count) truncates the positive quotient toward zero, while integer // gives the same whole-number value and an int result. float(total // member_count) produces a float such as 3.0 rather than the required int; the clarified integer-result requirement removes the original ambiguity. ** is exponentiation, not averaging. For negative quotients, int division truncates toward zero but // floors toward negative infinity, so the non-negative assumption is important. For arbitrarily huge integers, prefer // to avoid float precision issues.",
      "options": [
        "avg_loan_mdl = float(total_disbursed_mdl // member_count)",
        "avg_loan_mdl = total_disbursed_mdl ** member_count",
        "avg_loan_mdl = int(total_disbursed_mdl / member_count)",
        "avg_loan_mdl = total_disbursed_mdl // member_count"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "png-q040",
      "chapter": "moldova-scenarios",
      "type": "single",
      "question": "Voitcovschi Vladislav is opening a text log for an automated weather station in Ștefan Vodă. The file must support BOTH reading and writing, be created if missing, and be truncated immediately if it already exists. Which call meets all requirements?",
      "explanation": "w+ opens for reading and writing, creates a missing file, and truncates an existing file at opening. w creates/truncates but supports writing only. r is read-only and requires an existing file. r+ allows reading/writing but does not create a missing file or truncate existing data. After writing in w+, seek(0) is normally needed to read back from the beginning because writing advances the file position.",
      "options": [
        "open(\"meteo_log\", \"w\")",
        "open(\"meteo_log\", \"r\")",
        "open(\"meteo_log\", \"w+\")",
        "open(\"meteo_log\", \"r+\")"
      ],
      "correct": 2
    },
    {
      "id": "png-q041",
      "chapter": "moldova-scenarios",
      "type": "drag_drop",
      "question": "Voitcovschi Vladislav is building an MPay transaction handler. Attempt execute_payment(); log ordinary runtime exceptions; always call close_session() when Python exits the try statement normally or by an exception. Complete the three headers.",
      "explanation": "Use try, except Exception and finally in that order. try runs execute_payment(). An ordinary exception raised there transfers control to the handler, which CALLS log_transaction_error(). finally calls close_session() after success or failure, including when logging itself raises an exception. assert: and raise: are not valid compound headers here. Except Exception deliberately does not swallow SystemExit or KeyboardInterrupt; a bare except would catch those too. No finally can guarantee cleanup after abrupt process termination or power loss.",
      "dragItems": [
        {
          "id": "t0",
          "text": "assert:"
        },
        {
          "id": "t1",
          "text": "except Exception:"
        },
        {
          "id": "t2",
          "text": "finally:"
        },
        {
          "id": "t3",
          "text": "raise:"
        },
        {
          "id": "t4",
          "text": "try:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Attempt header",
          "correctItemId": "t4"
        },
        {
          "id": "z1",
          "label": "Error handler",
          "correctItemId": "t1"
        },
        {
          "id": "z2",
          "label": "Cleanup header",
          "correctItemId": "t2"
        }
      ],
      "code": "[1]\n    execute_payment()\n[2]\n    log_transaction_error()\n[3]\n    close_session()"
    },
    {
      "id": "png-q042",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is managing Soroca’s digital budget archive. If buget_soroca.txt exists as a regular readable file, display its full text. Assume no race condition or permission error occurs.",
      "explanation": "After import os, os.path.isfile(path) checks whether the path refers to a regular file. The unqualified isfile name was not imported, and os.exist/os.find are not the required APIs. doc is a file object: doc.read() returns all remaining text, and print displays it. Printing the path string prints only the filename. File objects have no get method for this purpose, and output is not Python’s standard output built-in. The explicit assumptions exclude a file disappearing between the check and open; production code should also handle I/O exceptions.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "isfile(\"buget_soroca.txt\"):"
        },
        {
          "id": "i0_1",
          "text": "os.exist(\"buget_soroca.txt\"):"
        },
        {
          "id": "i0_2",
          "text": "os.find(\"buget_soroca.txt\"):"
        },
        {
          "id": "i0_3",
          "text": "os.path.isfile(\"buget_soroca.txt\"):"
        },
        {
          "id": "i1_0",
          "text": "output(\"buget_soroca.txt\")"
        },
        {
          "id": "i1_1",
          "text": "print(doc.get(\"buget_soroca.txt\"))"
        },
        {
          "id": "i1_2",
          "text": "print(doc.read())"
        },
        {
          "id": "i1_3",
          "text": "print(\"buget_soroca.txt\")"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "File-existence condition",
          "correctItemId": "i0_3",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Display full text",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        }
      ],
      "code": "import os\nif [1]\n    doc = open(\"buget_soroca.txt\")\n    [2]\n    doc.close()"
    },
    {
      "id": "png-q043",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is drawing an E-shaped Eco-Verde Moldova billboard. Produce five rows: four stars on rows 1, 3 and 5, one star on rows 2 and 4. Select the exclusive upper bounds.",
      "explanation": "range(1, 6) produces row numbers 1 through 5 because the stop value is excluded. range(1, 5) produces four pixel positions, 1 through 4. On odd target rows, every iteration appends a star; on connector rows only pixel_pos == 1 appends a star. Outer bound 5 would create only four rows; inner bound 6 would create five stars per bar. A newline is appended after each row. The final print adds another newline after the already newline-terminated string, which does not change the five-row letter.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "4"
        },
        {
          "id": "i0_1",
          "text": "5"
        },
        {
          "id": "i0_2",
          "text": "6"
        },
        {
          "id": "i1_0",
          "text": "4"
        },
        {
          "id": "i1_1",
          "text": "5"
        },
        {
          "id": "i1_2",
          "text": "6"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Outer range bound",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Inner range bound",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ],
      "code": "display_output = \"\"\nfor line_num in range(1, [1]):\n    for pixel_pos in range(1, [2]):\n        if line_num == 1 or line_num == 3 or line_num == 5:\n            display_output += \"*\"\n        elif pixel_pos == 1:\n            display_output += \"*\"\n    display_output += \"\\n\"\nprint(display_output)"
    },
    {
      "id": "png-q044",
      "chapter": "moldova-scenarios",
      "type": "drag_drop",
      "question": "Voitcovschi Vladislav is transforming a seismic signal: FIRST multiply signal_strength by negative one, THEN square that result. Construct the expression in order. Tokens may be reused if needed.",
      "explanation": "The expression is (-signal_strength)**2. Parentheses ensure the negation happens before exponentiation, exactly matching the stated transformation. Without grouping, -signal_strength**2 means -(signal_strength**2), because exponentiation binds more tightly than unary minus on its left. For a signal of 3, the required result is 9; the ungrouped expression gives -9. Multiplying by -1 in an explicitly grouped expression would also work, but this token set encodes unary negation.",
      "dragItems": [
        {
          "id": "t0",
          "text": "signal_strength"
        },
        {
          "id": "t1",
          "text": "-"
        },
        {
          "id": "t2",
          "text": "("
        },
        {
          "id": "t3",
          "text": ")"
        },
        {
          "id": "t4",
          "text": "**2"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Position 1",
          "correctItemId": "t2"
        },
        {
          "id": "z1",
          "label": "Position 2",
          "correctItemId": "t1"
        },
        {
          "id": "z2",
          "label": "Position 3",
          "correctItemId": "t0"
        },
        {
          "id": "z3",
          "label": "Position 4",
          "correctItemId": "t3"
        },
        {
          "id": "z4",
          "label": "Position 5",
          "correctItemId": "t4"
        }
      ],
      "code": "signal_strength = int(input(\"Enter the seismic signal strength: \"))\nintensity = [1][2][3][4][5]"
    },
    {
      "id": "png-q045",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is documenting a university financial module. Select the PEP 257 RECOMMENDED delimiter for a docstring, its standard function location, and the expression that prints the given function’s docstring.",
      "explanation": "PEP 257 recommends triple double quotes, even for a one-line docstring. Technically a single-quoted or double-quoted string literal can also become a docstring if it is the first body statement; the question explicitly asks the recommendation, not the only legal quoting syntax. A function’s first statement must be the string literal for Python to store it as that function’s __doc__. print(convert_mdl.__doc__) reads that attribute. Bare __doc__ refers to the surrounding module’s docstring, not necessarily the function’s. Passing doc/docstring as arguments invokes the conversion and does not retrieve documentation.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "'"
        },
        {
          "id": "i0_1",
          "text": "\""
        },
        {
          "id": "i0_2",
          "text": "\"\"\""
        },
        {
          "id": "i1_0",
          "text": "At the beginning of the program file"
        },
        {
          "id": "i1_1",
          "text": "Above the function definition"
        },
        {
          "id": "i1_2",
          "text": "Immediately after the function header, as the first statement in its body"
        },
        {
          "id": "i1_3",
          "text": "At the end of the function block"
        },
        {
          "id": "i1_4",
          "text": "At the end of the program file"
        },
        {
          "id": "i2_0",
          "text": "print(__doc__)"
        },
        {
          "id": "i2_1",
          "text": "print(convert_mdl(doc))"
        },
        {
          "id": "i2_2",
          "text": "print(convert_mdl.__doc__)"
        },
        {
          "id": "i2_3",
          "text": "print(convert_mdl(docstring))"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Recommended delimiter at BOTH ends",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Function docstring location",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3",
            "i1_4"
          ]
        },
        {
          "id": "z2",
          "label": "Print function docstring",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        }
      ],
      "code": "def convert_mdl(lei):\n    \"\"\"Converts Moldovan Lei to Euro at the daily rate.\"\"\"\n    return lei / 19.50"
    },
    {
      "id": "png-q046",
      "chapter": "moldova-scenarios",
      "type": "multiple",
      "question": "Voitcovschi Vladislav has 200 registered_companies entries. The last five are system placeholders. Which TWO slices retain EVERY legitimate entry, including the first, and exclude exactly the final five?",
      "explanation": "Both [0:-5] and [:-5] start at index 0 and stop before the element five positions from the end, retaining 195 entries. An omitted start defaults to 0 for this positive-step slice. Starting at 1 incorrectly removes the first real company. Stopping at -4 excludes only four placeholders and leaves one placeholder in the result. Slicing returns a new list and does not remove entries from the original.",
      "options": [
        "registered_companies[1:-5]",
        "registered_companies[0:-5]",
        "registered_companies[1:-4]",
        "registered_companies[0:-4]",
        "registered_companies[:-5]"
      ],
      "correct": [
        1,
        4
      ]
    },
    {
      "id": "png-q047",
      "chapter": "moldova-scenarios",
      "type": "multiple",
      "question": "Voitcovschi Vladislav receives a finite float payment discrepancy that may be negative. Choose the TWO math functions to use as parts of a solution: take the absolute magnitude FIRST, then remove its fractional part. Assume import math has been executed.",
      "explanation": "Use math.floor(math.fabs(val)). fabs produces a non-negative floating-point magnitude; floor then returns the largest integer no greater than that non-negative value, which removes its fractional part. For -3.7, fabs gives 3.7 and floor gives 3. Order matters: taking fabs after floor(-3.7) would give 4.0 instead. fmod computes a remainder and requires two arguments, so fmod(val) is invalid. frexp decomposes a value into mantissa/exponent and returns a tuple, not an absolute whole-number amount.",
      "options": [
        "math.floor(val)",
        "math.fabs(val)",
        "math.fmod(val)",
        "math.frexp(val)"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "png-q048",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is testing a turbine-energy script for Costești-Stânca. Assume the user supplies numeric text and input itself succeeds. Evaluate the original code without inserting conversions.",
      "explanation": "input returns strings, so collecting text at lines 03 and 04 is valid. The function receives two strings, and ** is not defined for str operands: line 02 raises TypeError while line 05 is calling it. Consequently line 06 is not reached. Converting both inputs to suitable numbers would fix the calculation, but then concatenating a number directly with a string at line 06 would be another TypeError; str(total_energy), an f-string or comma-separated print arguments would be needed.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "The input calls at lines 03 and 04 themselves raise a type error merely because numeric text was entered.",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "Exponentiation raises a TypeError at line 02, reached through the function call at line 05.",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "The script successfully prints the correct calculated energy.",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ],
      "code": "def compute_output(base_val, exp_val):  # 01\n    return base_val ** exp_val          # 02\nturbine_load = input(\"Enter base load: \")  # 03\ntime_factor = input(\"Enter exponent: \")   # 04\ntotal_energy = compute_output(turbine_load, time_factor)  # 05\nprint(\"The projected output is \" + total_energy)  # 06"
    },
    {
      "id": "png-q049",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is checking identity and value equality in a Poșta Moldovei tracking script. Select each printed Boolean.",
      "explanation": "Initially the lists are different objects, so is is False. Their element values are different too, so == is also False. center_ids = region_codes rebinds the first name to the exact object already referenced by region_codes; it does not copy the list. Both names then identify the same list and have equal contents, making checks 3 and 4 True. is tests identity, whereas == tests value equality according to the objects’ comparison methods.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "True"
        },
        {
          "id": "i0_1",
          "text": "False"
        },
        {
          "id": "i1_0",
          "text": "True"
        },
        {
          "id": "i1_1",
          "text": "False"
        },
        {
          "id": "i2_0",
          "text": "True"
        },
        {
          "id": "i2_1",
          "text": "False"
        },
        {
          "id": "i3_0",
          "text": "True"
        },
        {
          "id": "i3_1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Check 1",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "Check 2",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "Check 3",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        },
        {
          "id": "z3",
          "label": "Check 4",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1"
          ]
        }
      ],
      "code": "center_ids = [10, 20, 30, 40, 50]\nregion_codes = [\"N\", \"S\", \"E\", \"W\", \"C\"]\nprint(center_ids is region_codes)   # Check 1\nprint(center_ids == region_codes)   # Check 2\ncenter_ids = region_codes\nprint(center_ids is region_codes)   # Check 3\nprint(center_ids == region_codes)   # Check 4"
    },
    {
      "id": "png-q050",
      "chapter": "moldova-scenarios",
      "type": "single",
      "question": "Voitcovschi Vladislav runs python meniu_soroca.py Placinte Sarmale Mamaliga. What does the script print?",
      "explanation": "sys.argv[0] is the script name meniu_soroca.py. The remaining arguments are strings: Placinte at index 1, Sarmale at index 2 and Mamaliga at index 3. Thus print(sys.argv[2]) prints Sarmale. The python interpreter command is not counted as the first script argument.",
      "options": [
        "Sarmale",
        "meniu_soroca.py",
        "Mamaliga",
        "Placinte"
      ],
      "correct": 0,
      "code": "import sys\nprint(sys.argv[2])"
    },
    {
      "id": "png-q051",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is studying immutable strings in a tour-naming script. What do the second and third print calls display?",
      "explanation": "Strings are immutable. tour_backup initially references the same \"Cricova\" string as current_tour. The += operation computes the concatenated value and rebinds current_tour to \"CricovaMilestii\"; it does not modify the original string object. Therefore the second print shows CricovaMilestii, while the backup still shows Cricova. There is no automatically inserted separator or reversal of the concatenation order.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Cricova"
        },
        {
          "id": "i0_1",
          "text": "CricovaMilestii"
        },
        {
          "id": "i0_2",
          "text": "Milestii"
        },
        {
          "id": "i0_3",
          "text": "MilestiiCricova"
        },
        {
          "id": "i1_0",
          "text": "Cricova"
        },
        {
          "id": "i1_1",
          "text": "CricovaMilestii"
        },
        {
          "id": "i1_2",
          "text": "Milestii"
        },
        {
          "id": "i1_3",
          "text": "MilestiiCricova"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Second print: current_tour",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Third print: tour_backup",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        }
      ],
      "code": "current_tour = \"Cricova\"\nprint(current_tour)\ntour_backup = current_tour\ncurrent_tour += \"Milestii\"\nprint(current_tour)\nprint(tour_backup)"
    },
    {
      "id": "png-q052",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is scanning parcel IDs at a Bălți logistics hub. Print IDs from the beginning and exit the loop immediately AFTER printing restricted ID 6. Complete the loop, exit and index update.",
      "explanation": "while repeats as long as current_idx < 10. When the printed item is 6, break exits the loop entirely, so values 7, 8 and 9 are not printed. Otherwise current_idx += 1 advances to the next element. continue without advancing would keep revisiting the same index indefinitely; current_idx = 1 repeatedly resets instead of progressing. if alone does not repeat, and for requires an iteration target and in expression, not this while-condition syntax.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "while"
        },
        {
          "id": "i0_1",
          "text": "for"
        },
        {
          "id": "i0_2",
          "text": "if"
        },
        {
          "id": "i0_3",
          "text": "break"
        },
        {
          "id": "i1_0",
          "text": "while"
        },
        {
          "id": "i1_1",
          "text": "for"
        },
        {
          "id": "i1_2",
          "text": "if"
        },
        {
          "id": "i1_3",
          "text": "break"
        },
        {
          "id": "i2_0",
          "text": "continue"
        },
        {
          "id": "i2_1",
          "text": "break"
        },
        {
          "id": "i2_2",
          "text": "current_idx += 1"
        },
        {
          "id": "i2_3",
          "text": "current_idx = 1"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Loop keyword",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Restricted-ID action",
          "correctItemId": "i1_3",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Other-ID action",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        }
      ],
      "code": "parcel_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\ncurrent_idx = 0\n[1] (current_idx < 10):\n    print(parcel_list[current_idx])\n    if parcel_list[current_idx] == 6:\n        [2]\n    else:\n        [3]"
    },
    {
      "id": "png-q053",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is building a Limba Noastră character counter. Begin with the supplied word \"Limba\", then repeatedly count each entered word. Exit only for the exact uppercase text STOP, without counting STOP.",
      "explanation": "while word_input != \"STOP\" repeats until the exact sentinel is received. for letter in word_input visits each Python string character and increments count_val once per iteration. The initial word Limba is counted first, producing 5, then input supplies the next word. STOP causes the next while test to fail before that word is counted. An if executes at most once and for needs an iterable rather than this condition. and/or combine expressions; they do not replace the in keyword of a for loop. Python counts Unicode code points here, which need not equal user-perceived grapheme clusters in every Unicode string.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "for"
        },
        {
          "id": "i0_1",
          "text": "if"
        },
        {
          "id": "i0_2",
          "text": "while"
        },
        {
          "id": "i1_0",
          "text": "for"
        },
        {
          "id": "i1_1",
          "text": "if"
        },
        {
          "id": "i1_2",
          "text": "while"
        },
        {
          "id": "i2_0",
          "text": "and"
        },
        {
          "id": "i2_1",
          "text": "or"
        },
        {
          "id": "i2_2",
          "text": "in"
        },
        {
          "id": "i2_3",
          "text": "not"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Outer loop",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Character loop",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Iteration keyword",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        }
      ],
      "code": "word_input = \"Limba\"\n[1] word_input != \"STOP\":\n    count_val = 0\n    [2] letter [3] word_input:\n        count_val += 1\n    print(count_val)\n    word_input = input(\"Enter a new word or STOP to exit: \")"
    },
    {
      "id": "png-q054",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is classifying a Tekwill student score. Assume exam_score is an integer. Valid values are 0–100; 90–100 is Excelent, 80–89 Foarte Bine, 70–79 Bine, and other valid values Respins. Invalid values must produce the error message. Complete the nested structure.",
      "explanation": "The outer if validates 0 <= exam_score <= 100; checking only <=100, as in the supplied draft, would incorrectly accept negative scores. The inner chain starts with if >=90, continues with elif >=80 and elif exam_score <80 and exam_score >69, then else for remaining valid scores. and requires both bounds and identifies 70–79; or would include many out-of-range-for-this-band values. The final outer else handles invalid values. elif cannot start a new chain, for is a loop rather than a conditional, and else: has no condition.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "elif"
        },
        {
          "id": "i0_1",
          "text": "if"
        },
        {
          "id": "i0_2",
          "text": "for"
        },
        {
          "id": "i0_3",
          "text": "else"
        },
        {
          "id": "i1_0",
          "text": "elif"
        },
        {
          "id": "i1_1",
          "text": "if"
        },
        {
          "id": "i1_2",
          "text": "for"
        },
        {
          "id": "i1_3",
          "text": "else"
        },
        {
          "id": "i2_0",
          "text": "elif"
        },
        {
          "id": "i2_1",
          "text": "if"
        },
        {
          "id": "i2_2",
          "text": "for"
        },
        {
          "id": "i2_3",
          "text": "else"
        },
        {
          "id": "i3_0",
          "text": "elif"
        },
        {
          "id": "i3_1",
          "text": "if"
        },
        {
          "id": "i3_2",
          "text": "for"
        },
        {
          "id": "i3_3",
          "text": "else"
        },
        {
          "id": "i4_0",
          "text": "or"
        },
        {
          "id": "i4_1",
          "text": "and"
        },
        {
          "id": "i4_2",
          "text": "not"
        },
        {
          "id": "i5_0",
          "text": "elif:"
        },
        {
          "id": "i5_1",
          "text": "if:"
        },
        {
          "id": "i5_2",
          "text": "for:"
        },
        {
          "id": "i5_3",
          "text": "else:"
        },
        {
          "id": "i6_0",
          "text": "elif:"
        },
        {
          "id": "i6_1",
          "text": "if:"
        },
        {
          "id": "i6_2",
          "text": "for:"
        },
        {
          "id": "i6_3",
          "text": "else:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Outer header keyword",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "First inner header keyword",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Second inner header keyword",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        },
        {
          "id": "z3",
          "label": "Third inner header keyword",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2",
            "i3_3"
          ]
        },
        {
          "id": "z4",
          "label": "Combined condition",
          "correctItemId": "i4_1",
          "optionIds": [
            "i4_0",
            "i4_1",
            "i4_2"
          ]
        },
        {
          "id": "z5",
          "label": "Inner fallback header",
          "correctItemId": "i5_3",
          "optionIds": [
            "i5_0",
            "i5_1",
            "i5_2",
            "i5_3"
          ]
        },
        {
          "id": "z6",
          "label": "Outer fallback header",
          "correctItemId": "i6_3",
          "optionIds": [
            "i6_0",
            "i6_1",
            "i6_2",
            "i6_3"
          ]
        }
      ],
      "code": "[1] 0 <= exam_score <= 100:\n    [2] exam_score >= 90:\n        print(\"Result: Excelent.\")\n    [3] exam_score >= 80:\n        print(\"Result: Foarte Bine.\")\n    [4] exam_score < 80 [5] exam_score > 69:\n        print(\"Result: Bine.\")\n    [6]\n        print(\"Result: Respins.\")\n[7]\n    print(\"Error: Invalid score entered.\")"
    },
    {
      "id": "png-q055",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is maintaining a server access log. Assume the directory exists and file permissions allow the operation. Evaluate append-mode behavior.",
      "explanation": "Append mode a creates a missing file and writes at its end rather than truncating old data. Existing text remains, so the second statement is false. close() flushes buffered text and releases the handle; operations through that closed handle are no longer valid, but a new open can access the path. The write call does not automatically append a newline, so this exact string may follow prior text on the same line.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Python creates the file if it does not yet exist.",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "Existing text is completely erased and replaced by the newly written text.",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "close() releases the file resource so it can be opened again later.",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ],
      "code": "log_file = open(\"log_acces_chisinau.txt\", \"a\")\nlog_file.write(\"New session started via secure port.\")\nlog_file.close()"
    },
    {
      "id": "png-q056",
      "chapter": "moldova-scenarios",
      "type": "drag_drop",
      "question": "Voitcovschi Vladislav is formatting a Piața Centrală receipt row. Product name: left-aligned, minimum width 10. Weight: right-aligned width 5, one decimal. Price: right-aligned width 7, two decimals. Place the correct format field in each position. Assume the numeric text is valid.",
      "explanation": "{0:10} formats the first string argument in a minimum-width 10 field; strings default to left alignment. {1:5.1f} formats the second argument as fixed-point, width 5 and one digit after the decimal; numeric formatting defaults to right alignment. {2:7.2f} similarly formats price with width 7 and two decimals. The other fields have wrong argument indices or malformed precision syntax. Width is a minimum, not a truncation limit. float replaces the unsafe eval calls from the draft because these inputs should be numbers, not arbitrary Python expressions.",
      "dragItems": [
        {
          "id": "t0",
          "text": "{10:0}"
        },
        {
          "id": "t1",
          "text": "{5:1f}"
        },
        {
          "id": "t2",
          "text": "{7:2f}"
        },
        {
          "id": "t3",
          "text": "{2:7.2f}"
        },
        {
          "id": "t4",
          "text": "{1:5.1f}"
        },
        {
          "id": "t5",
          "text": "{0:10}"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Product field",
          "correctItemId": "t5"
        },
        {
          "id": "z1",
          "label": "Weight field",
          "correctItemId": "t4"
        },
        {
          "id": "z2",
          "label": "Price field",
          "correctItemId": "t3"
        }
      ],
      "code": "print(\"[PRODUCT_FIELD] [WEIGHT_FIELD] [PRICE_FIELD]\".format(\n    market_data[0], float(market_data[1]), float(market_data[2])\n))"
    },
    {
      "id": "png-q057",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is preparing approximate birth-year notifications for a 2025 Chișinău Marathon event. Assume valid integer age text. Select the data type at each point.",
      "explanation": "input always returns a string, so volunteer_age is str even when it contains digits. int(volunteer_age) creates an integer used in subtraction from the integer event year; birth_year is therefore int. str(birth_year) explicitly converts that result to text, and concatenation with the message creates a str notification. print displays the existing value without changing its type. Subtracting age from year gives only an approximate birth year because it does not check whether the birthday has occurred.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "int"
        },
        {
          "id": "i0_1",
          "text": "str (string)"
        },
        {
          "id": "i0_2",
          "text": "float"
        },
        {
          "id": "i0_3",
          "text": "bool"
        },
        {
          "id": "i1_0",
          "text": "int"
        },
        {
          "id": "i1_1",
          "text": "str (string)"
        },
        {
          "id": "i1_2",
          "text": "float"
        },
        {
          "id": "i1_3",
          "text": "bool"
        },
        {
          "id": "i2_0",
          "text": "int"
        },
        {
          "id": "i2_1",
          "text": "str (string)"
        },
        {
          "id": "i2_2",
          "text": "float"
        },
        {
          "id": "i2_3",
          "text": "bool"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "volunteer_age after line 01",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "birth_year after line 03",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "notification at line 05",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        }
      ],
      "code": "volunteer_age = input(\"Enter your age: \")  # 01\nevent_year = 2025                       # 02\nbirth_year = event_year - int(volunteer_age)  # 03\nnotification = \"Registration confirmed for birth year: \" + str(birth_year)  # 04\nprint(notification)                     # 05"
    },
    {
      "id": "png-q058",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is maintaining a wine registry. Assume ordinary text input and no external I/O failures. Evaluate the function and its calls.",
      "explanation": "The function prints but has no explicit return statement, so it implicitly returns None. Line 14 supplies the two required arguments and uses the default winery=\"Generic\". Line 16 supplies all three by their exact keyword names, and keyword order may differ from parameter order. Line 12 supplies three positional arguments. Line 17 supplies drink_type positionally and grape_var by keyword while using the default winery. All these calls bind validly; a positional argument may precede keyword arguments.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "wine_registry explicitly returns a value with a return statement.",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "The calls at lines 14 and 16 are valid.",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "The calls at lines 12 and 17 raise an argument-binding error.",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ],
      "code": "def wine_registry(drink_type, grape_var, winery=\"Generic\"):  # 01\n    print(f\"Registry entry for {drink_type}.\")\n    if winery == \"Generic\":\n        print(f\"Standard {drink_type}: {grape_var}\")\n    else:\n        print(f\"Premium {drink_type}: {grape_var} from {winery}\")\n\nd_type = input(\"Enter type (Red, White, or Rose): \")\ng_var = input(\"Enter grape variety: \")\nif d_type == \"Red\" or d_type == \"White\":\n    w_name = input(\"Enter winery name: \")\n    wine_registry(d_type, g_var, w_name)  # 12\nelse:\n    wine_registry(d_type, g_var)        # 14\nwine_registry(winery=\"Purcari\", grape_var=\"Rara Neagra\", drink_type=\"Red\")  # 16\nwine_registry(\"Rose\", grape_var=\"Cabernet\")  # 17"
    },
    {
      "id": "png-q059",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is developing supermarket loyalty points in Drochia. One point should be added when new_points is omitted; VIP additions are doubled. Evaluate the proposed corrections and scope behavior.",
      "explanation": "A default value new_points=1 makes the third argument optional. Without it, the function requires all three arguments, so providing only two raises TypeError before the body executes. Function parameters are local bindings. Integers are immutable, and assigning new_points = new_points * 2 rebinds the local parameter without changing the caller’s global name. In the shown call, the global new_points stays 5, the passed-in amount doubles locally to 10, and final_balance is 20. The returned balance must be saved by the caller.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "A suitable header is def add_bonus_points(balance, vip_status, new_points=1):",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "With the original header, a later call providing only two arguments raises TypeError.",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "Multiplying the parameter new_points inside the function permanently changes the global new_points variable at line 06.",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ],
      "code": "def add_bonus_points(balance, vip_status, new_points):  # 01\n    if vip_status == True:\n        new_points = new_points * 2\n    balance = balance + new_points\n    return balance\nnew_points = 5  # 06\nbalance = 10\nfinal_balance = add_bonus_points(balance, True, new_points)"
    },
    {
      "id": "png-q060",
      "chapter": "moldova-scenarios",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is generating a raffle ticket number for an Ungheni event. Assume import random. Which TWO calls produce an integer from 5 through 11 inclusive?",
      "explanation": "randint(a,b) includes both endpoints, so randint(5,11) covers exactly 5 through 11. randrange(start,stop,step) excludes stop, so randrange(5,12,1) covers the same integers. randint(5,12) can produce 12, which is outside the range. randrange(5,11,1) stops at 10 and can never produce the required upper endpoint 11.",
      "options": [
        "random.randint(5, 12)",
        "random.randrange(5, 11, 1)",
        "random.randint(5, 11)",
        "random.randrange(5, 12, 1)"
      ],
      "correct": [
        2,
        3
      ]
    },
    {
      "id": "png-q061",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is choosing unittest.TestCase assertion methods for an agricultural-export system. Assume these methods are called through self inside a TestCase method. Match each testing purpose.",
      "explanation": "self.assertEqual(a,b) checks value equality using ==, so distinct lists with equal contents can pass. self.assertIs(a,b) checks identity using is and requires the same object. self.assertIn(a,b) checks membership using in. assertTrue(x) checks the truthiness of one expression rather than directly expressing the requested two-argument comparisons. In actual TestCase code, the self. prefix is required unless a method reference was explicitly bound elsewhere.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "assertEqual(a, b)"
        },
        {
          "id": "i0_1",
          "text": "assertTrue(x)"
        },
        {
          "id": "i0_2",
          "text": "assertIs(a, b)"
        },
        {
          "id": "i0_3",
          "text": "assertIn(a, b)"
        },
        {
          "id": "i1_0",
          "text": "assertEqual(a, b)"
        },
        {
          "id": "i1_1",
          "text": "assertTrue(x)"
        },
        {
          "id": "i1_2",
          "text": "assertIs(a, b)"
        },
        {
          "id": "i1_3",
          "text": "assertIn(a, b)"
        },
        {
          "id": "i2_0",
          "text": "assertEqual(a, b)"
        },
        {
          "id": "i2_1",
          "text": "assertTrue(x)"
        },
        {
          "id": "i2_2",
          "text": "assertIs(a, b)"
        },
        {
          "id": "i2_3",
          "text": "assertIn(a, b)"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Equal contents / values",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Exactly the same object",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Value a occurs in collection b",
          "correctItemId": "i2_3",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        }
      ]
    },
    {
      "id": "png-q062",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is implementing safe financial rate calculation. A missing amount OR missing duration must be reported; otherwise a zero duration must be reported; only valid inputs may be divided.",
      "explanation": "Use is None to test the absence sentinel, and or because either missing argument is sufficient to prevent calculation. and would miss cases where just one argument is absent. A single = is assignment, not a valid equality comparison in these conditions. Once neither value is missing, elif duration == 0 prevents division by zero. !=0 would incorrectly reject valid durations, and in 0 attempts membership against a non-iterable integer. The message branches return None implicitly; the valid branch returns the numeric quotient.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "if amount is None or duration is None:"
        },
        {
          "id": "i0_1",
          "text": "if amount is None and duration is None:"
        },
        {
          "id": "i0_2",
          "text": "if amount = None or duration = None:"
        },
        {
          "id": "i0_3",
          "text": "if amount = None and duration = None:"
        },
        {
          "id": "i1_0",
          "text": "elif duration == 0:"
        },
        {
          "id": "i1_1",
          "text": "elif duration = 0:"
        },
        {
          "id": "i1_2",
          "text": "elif duration != 0:"
        },
        {
          "id": "i1_3",
          "text": "elif duration in 0:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Missing-value condition",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Zero-duration condition",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        }
      ],
      "code": "def calculate_rate(amount, duration):\n    [1]\n        print(\"A required financial value is missing.\")\n    [2]\n        print(\"The calculation duration is zero.\")\n    else:\n        return amount / duration"
    },
    {
      "id": "png-q063",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is looking up wine-barrel IDs in Cricova. Even entering 101 prints Barrel ID not found. Diagnose the original script.",
      "explanation": "The dictionary has int keys 101 and 202 and str wine-name values. input returns str, so entering 101 yields \"101\", not the integer 101. Dictionary membership tests keys and does not automatically convert a numeric string to an integer, so the test fails. The syntax not barrel_id in wine_barrels is valid, though barrel_id not in wine_barrels is clearer. Convert validated input with int(input(...)) or use matching string keys. Invalid integer text should be handled with ValueError in a robust implementation.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "bool and str"
        },
        {
          "id": "i0_1",
          "text": "float and bool"
        },
        {
          "id": "i0_2",
          "text": "int and str"
        },
        {
          "id": "i0_3",
          "text": "float and int"
        },
        {
          "id": "i1_0",
          "text": "bool"
        },
        {
          "id": "i1_1",
          "text": "float"
        },
        {
          "id": "i1_2",
          "text": "int"
        },
        {
          "id": "i1_3",
          "text": "str"
        },
        {
          "id": "i2_0",
          "text": "Invalid syntax"
        },
        {
          "id": "i2_1",
          "text": "Mismatched data types"
        },
        {
          "id": "i2_2",
          "text": "Misnamed variables"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Dictionary key and value types",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "barrel_id type after input",
          "correctItemId": "i1_3",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Why entered IDs are not found",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ],
      "code": "wine_barrels = {101: \"Fetească Neagră\", 202: \"Merlot Reserve\"}\nbarrel_id = input(\"Enter the barrel ID number: \")\nif not barrel_id in wine_barrels:\n    print(\"Barrel ID not found.\")\nelse:\n    print(\"The wine variety is \" + wine_barrels[barrel_id])"
    },
    {
      "id": "png-q064",
      "chapter": "moldova-scenarios",
      "type": "multiple",
      "question": "Voitcovschi Vladislav is printing a comma-delimited winery export record. Enclose wine_label in double quotes, leave the integer unquoted, and put exactly one comma with no added spaces between fields. Assume the label contains no double quote, comma or newline. Which TWO complete solutions work?",
      "explanation": "The f-string and consistently numbered format fields both produce a value such as \"Negru\",120 with no spaces and no quotes around the number. Directly adding an int to a str raises TypeError. The multi-argument print call inserts its default separating spaces and violates the exact delimiter layout. The original mixed format string containing both {} and {1} would raise ValueError; it has been replaced by a valid f-string so the exercise genuinely has two correct answers. For arbitrary CSV fields containing quotes, commas or newlines, use the csv module instead of hand-building records.",
      "options": [
        "print(wine_label + ',' + bottles_exported)",
        "print(f'\"{wine_label}\",{bottles_exported}')",
        "print('\"' + wine_label + '\"', ',', bottles_exported)",
        "print('\"{0}\",{1}'.format(wine_label, bottles_exported))"
      ],
      "correct": [
        1,
        3
      ],
      "code": "wine_label = input(\"Enter the wine label: \")\nbottles_exported = int(input(\"Enter quantity of bottles exported: \"))"
    },
    {
      "id": "png-q065",
      "chapter": "moldova-scenarios",
      "type": "single",
      "question": "Voitcovschi Vladislav is documenting a National Bank of Moldova function. Assume rate is defined elsewhere. Which implementation contains a standard FUNCTION DOCSTRING rather than only a comment or invalid syntax?",
      "explanation": "A string literal as the first statement inside the function body becomes its __doc__. Triple double quotes are the recommended style. A # comment is valid Python but is not a docstring and does not populate get_fx_rate.__doc__. // and /* ... */ are not Python comment delimiters; the lone unclosed quote is a syntax error. None of the original four choices supplied a valid function docstring, so a correct triple-quoted option has been added rather than marking a comment as correct.",
      "options": [
        "def get_fx_rate():\n    # Returns the current MDL/EUR exchange rate\n    return rate",
        "// Returns the current MDL/EUR exchange rate\ndef get_fx_rate():\n    return rate",
        "def get_fx_rate():\n    /* Returns the current MDL/EUR exchange rate */\n    return rate",
        "' Returns the current MDL/EUR exchange rate\ndef get_fx_rate():\n    return rate",
        "def get_fx_rate():\n    \"\"\"Returns the current MDL/EUR exchange rate.\"\"\"\n    return rate"
      ],
      "correct": 4
    },
    {
      "id": "png-q066",
      "chapter": "moldova-scenarios",
      "type": "dropdown",
      "question": "Voitcovschi Vladislav is printing a multiplication board for Liceul Prometeu, with both factors running from 2 through 12 inclusive. Complete the nested loops. The first rows must start 4 6 8 ... 24 and 6 9 12 ... 36.",
      "explanation": "Both loops use range(2,13), yielding the eleven integers 2 through 12 because the stop 13 is excluded. The outer loop fixes one factor for a complete output line, and the inner loop varies the other. print(..., end=\" \") keeps each product on that line; the print() after the inner loop begins the next line. range(13) includes unwanted 0 and 1; range(2,12,1) omits 12; range(12) also begins at 0 and stops at 11. There are 11*11 = 121 products, and the last is 144.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "for col in range(13):"
        },
        {
          "id": "i0_1",
          "text": "for col in range(2, 13):"
        },
        {
          "id": "i0_2",
          "text": "for col in range(2, 12, 1):"
        },
        {
          "id": "i0_3",
          "text": "for col in range(12):"
        },
        {
          "id": "i1_0",
          "text": "for row in range(13):"
        },
        {
          "id": "i1_1",
          "text": "for row in range(2, 12, 1):"
        },
        {
          "id": "i1_2",
          "text": "for row in range(2, 13):"
        },
        {
          "id": "i1_3",
          "text": "for row in range(12):"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Outer loop",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Inner loop",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        }
      ],
      "code": "def multiplication_board():\n    [1]\n        [2]\n            print(row * col, end=\" \")\n        print()\nmultiplication_board()"
    },
    {
      "id": "png-q001",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Order these six groups from highest evaluation priority to lowest. Treat ordinary assignment as the final statement action, not an expression operator. Within the logical group, not has higher precedence than and, and higher than or.",
      "explanation": "Parentheses explicitly group subexpressions. Exponentiation binds more tightly than multiplication and division, which bind more tightly than addition and subtraction. Logical operations act on those evaluated expressions. Ordinary assignment then binds the final result to a name; it is a statement, not a normal expression operator. The original five positions could not accommodate six supplied groups, so this exercise provides six positions. Unary operators and comparisons are outside this simplified list.",
      "dragItems": [
        {
          "id": "i0",
          "text": "Exponentiation **"
        },
        {
          "id": "i1",
          "text": "Multiply *, divide /"
        },
        {
          "id": "i2",
          "text": "Parentheses ()"
        },
        {
          "id": "i3",
          "text": "Logical not, and, or"
        },
        {
          "id": "i4",
          "text": "Assignment ="
        },
        {
          "id": "i5",
          "text": "Add +, subtract -"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Position 1",
          "correctItemId": "i2"
        },
        {
          "id": "z1",
          "label": "Position 2",
          "correctItemId": "i0"
        },
        {
          "id": "z2",
          "label": "Position 3",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "Position 4",
          "correctItemId": "i5"
        },
        {
          "id": "z4",
          "label": "Position 5",
          "correctItemId": "i3"
        },
        {
          "id": "z5",
          "label": "Position 6",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "png-q002",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Match each expression to the type of its value.",
      "explanation": "False is a Boolean literal, so its type is bool. Quoting \"False\" makes it text of type str rather than a false Boolean. The decimal literal 3.1415 is a float, and 42 is an int. Neither a dictionary nor a list is constructed by these expressions. type returns a type object describing its argument; the requested matches are those argument type names.",
      "dragItems": [
        {
          "id": "i0",
          "text": "float"
        },
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "dict"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "bool"
        },
        {
          "id": "i5",
          "text": "list"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "type(False)",
          "correctItemId": "i4"
        },
        {
          "id": "z1",
          "label": "type(\"False\")",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "type(3.1415)",
          "correctItemId": "i0"
        },
        {
          "id": "z3",
          "label": "type(42)",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "png-q003",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Complete the call that reads an age and converts the entered text to an integer. Assume valid integer input.",
      "explanation": "Use int(input(\"Enter your age: \")). input returns text even when the entered characters are digits. int converts that text to an integer; float would produce a floating-point number, and str would leave it as text. print displays output rather than reading a value. number, get and scan are not the required Python built-ins. Invalid integer text raises ValueError, which this exercise explicitly excludes.",
      "dragItems": [
        {
          "id": "i0",
          "text": "float"
        },
        {
          "id": "i1",
          "text": "int"
        },
        {
          "id": "i2",
          "text": "number"
        },
        {
          "id": "i3",
          "text": "str"
        },
        {
          "id": "i4",
          "text": "print"
        },
        {
          "id": "i5",
          "text": "input"
        },
        {
          "id": "i6",
          "text": "get"
        },
        {
          "id": "i7",
          "text": "scan"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Outer conversion",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "Input function",
          "correctItemId": "i5"
        }
      ],
      "code": "var = [1]([2](\"Enter your age: \"))"
    },
    {
      "id": "png-q004",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "For each statement about ordinary Python comments, select True or False.",
      "explanation": "// performs floor division, not comment introduction. Outside quoted strings, # begins a comment whose text is ignored by the parser through the line end. It can follow a statement, such as total = 5 # initial amount. A # character inside a string is data, not a comment delimiter. Comments document code and do not execute as instructions.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Single-line comments start with //.",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "Outside a string literal, # starts a comment extending to the end of that physical line.",
          "correctItemId": "i0"
        },
        {
          "id": "z2",
          "label": "A comment may follow executable code on the same line.",
          "correctItemId": "i0"
        }
      ]
    },
    {
      "id": "png-q005",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Complete error handling for opening a file. Close the file only if opening succeeded; otherwise report the missing file. Assume other I/O errors are outside this exercise.",
      "explanation": "try attempts the file open. except FileNotFoundError handles a missing path and prints the message. finally executes during ordinary exit from the try statement, but the handle is closed only when f is not None. Initializing f avoids the unbound-name error that would occur if open failed and cleanup blindly called f.close(). catch and finish are not Python exception-handling keywords; else would run only after a successful try, not as unconditional cleanup.",
      "dragItems": [
        {
          "id": "i0",
          "text": "except:"
        },
        {
          "id": "i1",
          "text": "try:"
        },
        {
          "id": "i2",
          "text": "catch:"
        },
        {
          "id": "i3",
          "text": "else"
        },
        {
          "id": "i4",
          "text": "catch"
        },
        {
          "id": "i5",
          "text": "except FileNotFoundError"
        },
        {
          "id": "i6",
          "text": "else:"
        },
        {
          "id": "i7",
          "text": "finish:"
        },
        {
          "id": "i8",
          "text": "finally:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "First header",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "Exception header",
          "correctItemId": "i5"
        },
        {
          "id": "z2",
          "label": "Cleanup header",
          "correctItemId": "i8"
        }
      ],
      "code": "f = None\n[1]\n    f = open(\"data.txt\")\n[2]:\n    print(\"File is missing!\")\n[3]\n    if f is not None:\n        f.close()"
    },
    {
      "id": "png-q006",
      "chapter": "fundamentals-1",
      "type": "single",
      "question": "What is printed?",
      "explanation": "The f prefix creates a formatted string literal. The expressions inside braces are evaluated, inserting Anna and 25 into the surrounding sentence. The braces do not remain literal in this f-string. Percent placeholders belong to a different formatting style and are not present in this code. Both variables are defined, and the string syntax is valid.",
      "options": [
        "My name is Anna and I am 25 years old.",
        "Syntax error",
        "My name is {name} and I am {age} years old.",
        "My name is %s and I am %d years old."
      ],
      "correct": 0,
      "code": "name = \"Anna\"\nage = 25\nprint(f\"My name is {name} and I am {age} years old.\")"
    },
    {
      "id": "png-q007",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Evaluate these statements about ordinary Python variable names and bindings.",
      "explanation": "Identifiers may contain digits but cannot start with one. Python binds names through assignments such as x = 5; int x = 5 is not Python declaration syntax. Dynamic typing allows the same name to refer later to a different kind of object, such as x = \"five\". The objects retain their own types; rebinding a name does not convert the earlier integer object into a string.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "A variable name can start with a digit, such as 1variable.",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "Python requires declarations such as int x = 5.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "A name bound to an int can later be rebound to a string.",
          "correctItemId": "i0"
        }
      ]
    },
    {
      "id": "png-q008",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Complete the temperature classification. What does this code print for t = 15?",
      "explanation": "Use if, elif and else:. Since 15 < 0 is false, the first branch is skipped. The next test, 15 < 20, is true, so Cold is printed and the final else is skipped. Python spells the additional conditional elif, not else if. when, switch, case and default do not form this if/elif/else structure. An else header has a colon and no condition.",
      "dragItems": [
        {
          "id": "i0",
          "text": "when"
        },
        {
          "id": "i1",
          "text": "if"
        },
        {
          "id": "i2",
          "text": "switch"
        },
        {
          "id": "i3",
          "text": "else if"
        },
        {
          "id": "i4",
          "text": "elif"
        },
        {
          "id": "i5",
          "text": "case"
        },
        {
          "id": "i6",
          "text": "otherwise:"
        },
        {
          "id": "i7",
          "text": "else:"
        },
        {
          "id": "i8",
          "text": "default:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Initial conditional",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "Additional conditional",
          "correctItemId": "i4"
        },
        {
          "id": "z2",
          "label": "Fallback header",
          "correctItemId": "i7"
        }
      ],
      "code": "t = 15\n[1] t < 0:\n    print(\"Freezing\")\n[2] t < 20:\n    print(\"Cold\")\n[3]\n    print(\"Warm\")"
    },
    {
      "id": "png-q009",
      "chapter": "fundamentals-1",
      "type": "single",
      "question": "What value does the expression return?",
      "explanation": "True and False is False. not False is True. The outer operation is therefore False or True, which evaluates to True. Parentheses make the grouping explicit. No undefined name or invalid operation is involved, and Boolean operators do not return None in this all-Boolean example.",
      "options": [
        "False",
        "True",
        "Error",
        "None"
      ],
      "correct": 1,
      "code": "(True and False) or (not False)"
    },
    {
      "id": "png-q010",
      "chapter": "fundamentals-1",
      "type": "single",
      "question": "After python main.py start 8080, what is sys.argv[1]? Assume main.py imports sys.",
      "explanation": "sys.argv[0] is the script name, main.py. The first argument supplied to the script is the string start at index 1, and 8080 is the string at index 2. The interpreter command python is not included as argv[0] for this script invocation. Arguments arrive as strings rather than automatically becoming integers.",
      "options": [
        "main.py",
        "python",
        "start",
        "8080"
      ],
      "correct": 2
    },
    {
      "id": "png-q011",
      "chapter": "fundamentals-1",
      "type": "dropdown",
      "question": "Match each comparison to its Boolean result.",
      "explanation": "An integer 5 and string \"5\" are unequal; equality does not implicitly parse the string, so the first result is False rather than an exception. 5 != 4 is True because the numeric values differ. Strict greater-than rejects equal operands, making 10 > 10 False. Greater-than-or-equal includes equality, making 10 >= 10 True. These comparisons produce Boolean results.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "5 == \"5\"",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "5 != 4",
          "correctItemId": "i0"
        },
        {
          "id": "z2",
          "label": "10 > 10",
          "correctItemId": "i1"
        },
        {
          "id": "z3",
          "label": "10 >= 10",
          "correctItemId": "i0"
        }
      ]
    },
    {
      "id": "png-q012",
      "chapter": "fundamentals-1",
      "type": "single",
      "question": "What is the result of 10 // 3?",
      "explanation": "Integer floor division rounds the mathematical quotient downward. For positive operands, 10 // 3 is the integer 3 because 3 times 3 is 9 and one remains. Ordinary / division gives a float near 3.3333, while 10 % 3 gives the remainder 1. With negative operands, flooring is toward negative infinity rather than merely discarding fractional digits.",
      "options": [
        "0",
        "3.3333333333333335",
        "3",
        "1"
      ],
      "correct": 2
    },
    {
      "id": "png-q013",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Complete the method call that reads the entire text file into one string.",
      "explanation": "read() without a size argument returns all remaining text as one string in text mode. readline() reads a single line; readlines() returns a list of lines rather than one string. close releases the handle after reading. A with statement is another way to guarantee closing, but this exercise supplies the explicit close.",
      "dragItems": [
        {
          "id": "i0",
          "text": "readline"
        },
        {
          "id": "i1",
          "text": "readlines"
        },
        {
          "id": "i2",
          "text": "read"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Read method",
          "correctItemId": "i2"
        }
      ],
      "code": "f = open(\"document.txt\", \"r\")\ncontent = f.[1]()\nf.close()"
    },
    {
      "id": "png-q014",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Match each basic file mode to its intended action.",
      "explanation": "r opens for reading and requires an existing file. w opens for writing, creates a missing file and truncates an existing one. a opens for appending and writes at the end, also creating a missing file. The unused x mode exclusively creates a new file and fails when the path already exists. These are basic modes without +, which would enable both reading and writing.",
      "dragItems": [
        {
          "id": "i0",
          "text": "a"
        },
        {
          "id": "i1",
          "text": "r"
        },
        {
          "id": "i2",
          "text": "x"
        },
        {
          "id": "i3",
          "text": "w"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Read an existing file",
          "correctItemId": "i1"
        },
        {
          "id": "z1",
          "label": "Write, creating or overwriting a file",
          "correctItemId": "i3"
        },
        {
          "id": "z2",
          "label": "Append, preserving existing contents",
          "correctItemId": "i0"
        }
      ]
    },
    {
      "id": "png-q015",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "What is name[1:4]?",
      "explanation": "String indices start at zero. The slice begins at index 1, the y, and stops before index 4, the o. It therefore contains indices 1, 2 and 3: yth. Including the stop index would incorrectly produce ytho. Starting at zero would include P. Slicing produces a new string without changing name.",
      "options": [
        "hon",
        "ytho",
        "Pyt",
        "yth"
      ],
      "correct": 3,
      "code": "name = 'Python'"
    },
    {
      "id": "png-q016",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "What does my_list[::-1] return?",
      "explanation": "A step of -1 traverses the entire sequence backward when start and stop are omitted. The result is a reversed copy, [50, 40, 30, 20, 10], not just the final element. The original list remains unchanged. This differs from the in-place reverse() method, whose return value is None.",
      "options": [
        "[10, 20, 30, 40, 50]",
        "[50, 40, 30, 20, 10]",
        "Error",
        "[50]"
      ],
      "correct": 1,
      "code": "my_list = [10, 20, 30, 40, 50]"
    },
    {
      "id": "png-q017",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Choose the random-module function that returns an integer from 1 through 10, including both endpoints.",
      "explanation": "random.randint(1, 10) includes both 1 and 10. random.randrange(1, 10) excludes 10, so the same two arguments do not satisfy this requirement. random.random() returns a float in [0.0, 1.0) and takes no bounds. float is a conversion built-in, not the requested random-module function.",
      "dragItems": [
        {
          "id": "i0",
          "text": "randrange"
        },
        {
          "id": "i1",
          "text": "float"
        },
        {
          "id": "i2",
          "text": "randint"
        },
        {
          "id": "i3",
          "text": "random"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Function name",
          "correctItemId": "i2"
        }
      ],
      "code": "import random\nnumber = random.[1](1, 10)"
    },
    {
      "id": "png-q018",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Evaluate break in a while loop.",
      "explanation": "break exits the innermost enclosing for or while loop. continue, not break, skips the rest of one iteration and starts the next iteration. Nested outer loops are not automatically terminated by a break in the inner loop. A loop else suite is also skipped when the loop terminates through break rather than normal exhaustion or a false condition.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "break exits the innermost current loop entirely.",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "break skips only the current iteration and then starts the next one.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "break can be used only in for loops, not while loops.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "png-q019",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "How many numbers are printed?",
      "explanation": "range(1, 5) begins at 1 and stops before 5, yielding 1, 2, 3 and 4. The loop executes once for each of those four values and prints one number per line. The stop value is exclusive; counting it would incorrectly give five iterations.",
      "options": [
        "1 number",
        "4 numbers: 1, 2, 3, 4",
        "3 numbers",
        "5 numbers: 1, 2, 3, 4, 5"
      ],
      "correct": 1,
      "code": "for i in range(1, 5):\n    print(i)"
    },
    {
      "id": "png-q020",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Complete the method that supplies both dictionary keys and values.",
      "explanation": "items() exposes key-value pairs, which can be unpacked into key and value on each iteration. keys() supplies keys alone, and values() supplies values alone; neither is the paired iterable required here. The dictionary is not changed by reading its items in this loop.",
      "dragItems": [
        {
          "id": "i0",
          "text": "values"
        },
        {
          "id": "i1",
          "text": "keys"
        },
        {
          "id": "i2",
          "text": "items"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Dictionary method",
          "correctItemId": "i2"
        }
      ],
      "code": "scores = {'John': 10, 'Mary': 9}\nfor key, value in scores.[1]():\n    print(key, value)"
    },
    {
      "id": "png-q021",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Evaluate ordinary local/global name lookup. A local-only name is not separately defined at module scope.",
      "explanation": "A local binding belongs to its function scope and is not automatically a module-level variable. Returning its value is possible, but does not export that local binding. global changes where assignments to a declared name bind it: at module scope rather than locally. Reading an existing global without assigning to that name does not require global. Mutating a shared object and rebinding its name are different operations.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "A name defined only locally in a function cannot be read directly by that name outside the function.",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "global allows assignments in the function to rebind a module-level name.",
          "correctItemId": "i0"
        },
        {
          "id": "z2",
          "label": "A function cannot read an existing module-level name unless global is used.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "png-q022",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Complete the keyword used for additional conditions after an if. Multiple such branches are permitted.",
      "explanation": "elif tests an additional condition if earlier branches did not match. Multiple elif branches are allowed, and the first matching branch runs. else is the unconditional fallback and has no condition. else if is not Python syntax; elif is one keyword. pass is a placeholder statement in the branch bodies.",
      "dragItems": [
        {
          "id": "i0",
          "text": "else"
        },
        {
          "id": "i1",
          "text": "elif"
        },
        {
          "id": "i2",
          "text": "else if"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Additional-branch keyword",
          "correctItemId": "i1"
        }
      ],
      "code": "if x == 1:\n    pass\n[1] x == 2:\n    pass"
    },
    {
      "id": "png-q023",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "Which value is false in a Boolean condition such as if value:?",
      "explanation": "Numeric zero is falsy. Negative nonzero numbers such as -1 are truthy, as are nonempty lists and nonempty strings. The string \"False\" contains characters and is not the Boolean False. Other common falsy values include None and empty containers, but those are not the offered alternatives.",
      "options": [
        "-1",
        "0",
        "[1, 2]",
        "'False'"
      ],
      "correct": 1
    },
    {
      "id": "png-q024",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Evaluate pass in Python.",
      "explanation": "pass is a syntactically valid statement that performs no action. It can fill a function, class or conditional body while implementation is pending. It neither terminates the program nor exits a loop. break exits the innermost loop; return exits a function. Executing pass simply continues to the next statement.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "pass can be a placeholder in a block whose body would otherwise be empty.",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "pass stops the entire program.",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "pass is equivalent to break.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "png-q025",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "Which line swaps the current values of a and b without a temporary variable?",
      "explanation": "The right-hand side b, a is evaluated using the original bindings before either assignment target changes. Unpacking then assigns those values to a and b in reversed order. Sequential a = b; b = a loses the original a and leaves both names with the original b. swap is not a Python built-in that rebinds these caller variables automatically.",
      "options": [
        "a, b = b, a",
        "a = b; b = a",
        "swap(a, b)"
      ],
      "correct": 0
    },
    {
      "id": "png-q026",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Complete the case-sensitive test that the character 'A' is absent from text.",
      "explanation": "not in is the negated membership operator. For a string, it checks that the requested substring does not occur. is not tests object nonidentity rather than substring absence. in not and != in are invalid spellings for this operation. Character case matters, so a lowercase a does not by itself make uppercase A present.",
      "dragItems": [
        {
          "id": "i0",
          "text": "is not"
        },
        {
          "id": "i1",
          "text": "not in"
        },
        {
          "id": "i2",
          "text": "in not"
        },
        {
          "id": "i3",
          "text": "!= in"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Membership operator",
          "correctItemId": "i1"
        }
      ],
      "code": "if 'A' [1] text:\n    print('Missing!')"
    },
    {
      "id": "png-q027",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Evaluate equality and identity.",
      "explanation": "== invokes equality semantics, allowing distinct objects such as two separately constructed lists to compare equal. is tests identity and does not ask the objects to compare their values. Thus [1] == [1] is True while two separately created list objects are not identical. is None is a common identity test for the singleton None; is should not replace value equality for numbers or strings.",
      "dragItems": [
        {
          "id": "i0",
          "text": "True"
        },
        {
          "id": "i1",
          "text": "False"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "== normally compares values using the type’s equality operation.",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "is checks whether two references designate the same object.",
          "correctItemId": "i0"
        },
        {
          "id": "z2",
          "label": "is and == always mean exactly the same thing.",
          "correctItemId": "i1"
        }
      ]
    },
    {
      "id": "png-q028",
      "chapter": "fundamentals-2",
      "type": "dropdown",
      "question": "Add new_item as one new element at the end of my_list.",
      "explanation": "append(new_item) adds the argument as one element at the end. extend consumes an iterable and appends its elements separately, so it can flatten one level of the intended item. insert needs an index plus an item. add is a set method rather than the list method requested here. append mutates the list and returns None.",
      "dragItems": [
        {
          "id": "i0",
          "text": "extend"
        },
        {
          "id": "i1",
          "text": "append"
        },
        {
          "id": "i2",
          "text": "add"
        },
        {
          "id": "i3",
          "text": "insert"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "List method",
          "correctItemId": "i1"
        }
      ],
      "code": "my_list.[1](new_item)"
    },
    {
      "id": "png-q029",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "Which assignment leaves text equal to \"John likes oranges\"?",
      "explanation": "replace returns a new string with matching substrings replaced; assigning that return value updates the text binding. Strings are immutable, so calling replace without keeping its result would not change text. strip removes specified characters only from the ends, not an interior word. split returns a list and its second positional argument expects an integer limit. Strings do not support item assignment with word keys.",
      "options": [
        "text = text.replace('apples', 'oranges')",
        "text = text.strip('apples')",
        "text = text.split('apples', 'oranges')",
        "text['apples'] = 'oranges'"
      ],
      "correct": 0,
      "code": "text = \"John likes apples\""
    },
    {
      "id": "png-q030",
      "chapter": "fundamentals-2",
      "type": "single",
      "question": "What is printed?",
      "explanation": "test_func(3) returns 6 and test_func(4) returns 8. The + operation adds those two returned integers before print runs, producing 14. There are two independent function calls; returning from the first does not prevent the second call. Neither 6 nor 8 alone is the complete expression result.",
      "options": [
        "6",
        "8",
        "Error",
        "14",
        "7"
      ],
      "correct": 3,
      "code": "def test_func(x):\n    return x * 2\n\nprint(test_func(3) + test_func(4))"
    },
    {
      "id": "png-q067",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Evaluate these statements about Python data types.",
      "explanation": "Python has distinct int and float types. It is dynamically typed: an assignment does not require a type declaration. Dynamic typing does not mean weak typing; incompatible operations can raise TypeError. The two Boolean literals are spelled True and False, not true and false.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Python distinguishes integers from floating-point numbers.",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "A data type must be specified when assigning a variable.",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "The Boolean literals True and False start with capital letters.",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q068",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Convert the serial number to text and the price to a float. Complete the code to print exactly: The serial number of the product is 55555 and it will cost 44.0.",
      "explanation": "str(55555) produces text and float(44) produces 44.0. Concatenation needs strings on both sides of +, including str(amount). The literal spaces and final period preserve the exact required output. A separate comma-separated period would add an unwanted space.",
      "code": "serialnumber = [1](55555)\namount = [2](44)\nprint([3])",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "str"
        },
        {
          "id": "i0_1",
          "text": "string"
        },
        {
          "id": "i0_2",
          "text": "text"
        },
        {
          "id": "i1_0",
          "text": "float"
        },
        {
          "id": "i1_1",
          "text": "fl"
        },
        {
          "id": "i1_2",
          "text": "decimal"
        },
        {
          "id": "i1_3",
          "text": "double"
        },
        {
          "id": "i2_0",
          "text": "\"The serial number of the product is \" + serialnumber + \" and it will cost \" + str(amount) + \".\""
        },
        {
          "id": "i2_1",
          "text": "\"The serial number of the product is \" & serialnumber"
        },
        {
          "id": "i2_2",
          "text": "serialnumber + amount"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Serial conversion",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Price conversion",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Print expression",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q069",
      "chapter": "practice-1",
      "type": "single",
      "question": "Which slice reverses all characters of a product code?",
      "explanation": "A step of -1 traverses the entire string backward. [::1] is a valid full forward slice. [1::] omits the first character, while [-1::] keeps only the last character; it does not remove that last character.",
      "options": [
        "[-1::]",
        "[::1]",
        "[::-1]",
        "[1::]"
      ],
      "correct": 2
    },
    {
      "id": "png-q070",
      "chapter": "practice-1",
      "type": "drag_drop",
      "question": "Arrange the lines to display Bears, Jaguars, Lions and Panthers, one per line.",
      "explanation": "A list uses append, not set.add. sort changes the list into alphabetical order. The for header ends with a colon and its print body is indented. Python does not use braces for a loop body.",
      "dragItems": [
        {
          "id": "i0",
          "text": "animals = [\"Bears\", \"Panthers\", \"Lions\"]"
        },
        {
          "id": "i1",
          "text": "animals.append(\"Jaguars\")"
        },
        {
          "id": "i2",
          "text": "animals.sort()"
        },
        {
          "id": "i3",
          "text": "for animal in animals:"
        },
        {
          "id": "i4",
          "text": "    print(animal)"
        },
        {
          "id": "i5",
          "text": "animals.add(\"Jaguars\")"
        },
        {
          "id": "i6",
          "text": "for animal in animals {"
        },
        {
          "id": "i7",
          "text": "}"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Line 5",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "png-q071",
      "chapter": "practice-1",
      "type": "multiple",
      "question": "After sorting, which TWO commands display rook?",
      "explanation": "Sorting produces bishop, king, knight, pawn, queen, rook. The last element has index 5 and negative index -1. Index 3 is pawn; index 6 raises IndexError.",
      "code": "pieces = [\"king\", \"queen\", \"rook\", \"bishop\", \"knight\", \"pawn\"]\npieces.sort()",
      "options": [
        "print(pieces[3])",
        "print(pieces[-1])",
        "print(pieces[5])",
        "print(pieces[6])"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "png-q072",
      "chapter": "practice-1",
      "type": "single",
      "question": "Which comparison is evaluated last before assignment to z?",
      "explanation": "x + y > 7 is True. Consequently x * y < 15 is evaluated and is False. The left operand of or is then False, so x - y > 2 is evaluated last and is False. z becomes False. Assignment is a statement, not a comparison.",
      "code": "x = 5\ny = 3\nz = x + y > 7 and x * y < 15 or x - y > 2",
      "options": [
        "x - y > 2",
        "z =",
        "x * y < 15 or x - y > 2",
        "x + y > 7 and x * y < 15"
      ],
      "correct": 0
    },
    {
      "id": "png-q073",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Evaluate the comparisons.",
      "explanation": "Division precedes subtraction: a is 90.0, which equals integer 90. 35 % 15 is 5, and 5 // 2 is integer 2. Exponentiation precedes unary minus, so c is -(3 ** 2), or -9.",
      "code": "a = 100 - 70 / 7\nb = (35 % 15) // 2\nc = -3 ** 2",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "a == 90",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "b == 2.5",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "c == -9",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q074",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Assume grade is an integer from 0 through 100. Complete the grade messages: 100 Outstanding; 90–99 Great; 71–89 You are doing well. Strive to improve; 70 and below Study hard.",
      "explanation": "Equality isolates 100. >= includes 90 in Great, and <= includes 70 in Study hard. The final else therefore covers 71 through 89. These conditions assume the stated valid range.",
      "code": "if grade [1] 100:\n    print(\"Outstanding\")\nelif grade [2] 90:\n    print(\"Great\")\nelif grade [3] 70:\n    print(\"Study hard\")\nelse:\n    print(\"You are doing well. Strive to improve\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "=="
        },
        {
          "id": "i0_1",
          "text": ">"
        },
        {
          "id": "i0_2",
          "text": "<"
        },
        {
          "id": "i1_0",
          "text": ">="
        },
        {
          "id": "i1_1",
          "text": ">"
        },
        {
          "id": "i1_2",
          "text": "<="
        },
        {
          "id": "i2_0",
          "text": "<="
        },
        {
          "id": "i2_1",
          "text": "<"
        },
        {
          "id": "i2_2",
          "text": ">="
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "At 100",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "At 90",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "At 70",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q075",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "With a = 10 and b = 3, choose each operator. The displayed division value 3.33 is rounded to two decimal places, not an exact equality.",
      "explanation": "+ adds, - subtracts, / gives 3.3333333333333335 here, // floors the quotient to 3, and % gives remainder 1. To display 3.33, format a / b with .2f; ordinary division does not return exactly 3.33.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "+"
        },
        {
          "id": "i0_1",
          "text": "*"
        },
        {
          "id": "i0_2",
          "text": "//"
        },
        {
          "id": "i1_0",
          "text": "-"
        },
        {
          "id": "i1_1",
          "text": "//"
        },
        {
          "id": "i1_2",
          "text": "/"
        },
        {
          "id": "i2_0",
          "text": "%"
        },
        {
          "id": "i2_1",
          "text": "/"
        },
        {
          "id": "i2_2",
          "text": "//"
        },
        {
          "id": "i3_0",
          "text": "/"
        },
        {
          "id": "i3_1",
          "text": "//"
        },
        {
          "id": "i3_2",
          "text": "%"
        },
        {
          "id": "i4_0",
          "text": "//"
        },
        {
          "id": "i4_1",
          "text": "/"
        },
        {
          "id": "i4_2",
          "text": "%"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "13",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "7",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Approximately 3.33",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        },
        {
          "id": "z3",
          "label": "Integer 3",
          "correctItemId": "i3_1",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2"
          ]
        },
        {
          "id": "z4",
          "label": "Remainder 1",
          "correctItemId": "i4_2",
          "optionIds": [
            "i4_0",
            "i4_1",
            "i4_2"
          ]
        }
      ]
    },
    {
      "id": "png-q076",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Evaluate the statements after all assignments.",
      "explanation": "b = a binds b to the same object as a, making both value equality and identity true. c still refers to the earlier value 3 while b refers to 5. Assignment aliases an object; it does not establish a permanent link between variable names.",
      "code": "a = 5\nb = 3\nc = b\nb = a",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        },
        {
          "id": "i3_0",
          "text": "Yes"
        },
        {
          "id": "i3_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "a == b",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "a is b",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "b == 3",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        },
        {
          "id": "z3",
          "label": "c is b",
          "correctItemId": "i3_1",
          "optionIds": [
            "i3_0",
            "i3_1"
          ]
        }
      ]
    },
    {
      "id": "png-q077",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Choose the keyword that makes the containment test True.",
      "explanation": "in tests membership. The substring nine occurs in the quote. The other choices are not containment operators.",
      "code": "quote = \"A stitch in time saves nine\"\nprint(\"nine\" [1] quote)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "in"
        },
        {
          "id": "i0_1",
          "text": "part"
        },
        {
          "id": "i0_2",
          "text": "with"
        },
        {
          "id": "i0_3",
          "text": "on"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Keyword",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        }
      ]
    },
    {
      "id": "png-q078",
      "chapter": "practice-1",
      "type": "drag_drop",
      "question": "Print both messages only when month_sales exceeds 10000.",
      "explanation": "The requirement is strictly over 10000, so use > rather than >=. Both indented print calls belong to the same if body; no alternative branch is needed.",
      "dragItems": [
        {
          "id": "i0",
          "text": "if month_sales > 10000:"
        },
        {
          "id": "i1",
          "text": "    print(\"Great month\")"
        },
        {
          "id": "i2",
          "text": "    print(\"Keep it going\")"
        },
        {
          "id": "i3",
          "text": "if month_sales >= 10000:"
        },
        {
          "id": "i4",
          "text": "else:"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        }
      ]
    },
    {
      "id": "png-q079",
      "chapter": "practice-1",
      "type": "drag_drop",
      "question": "Arrange the ACTUAL evaluation trace for this expression. Account for short-circuit evaluation, not just operator precedence.",
      "explanation": "Python evaluates operands left to right and short-circuits. Both comparisons in the left and are True, so or does not evaluate x + y == 11 or not x * y > 25. Precedence determines grouping, not a rule that every not expression executes first.",
      "code": "x = 7\ny = 4\nprint(x > y and x - y >= 2 or x + y == 11 and not x * y > 25)",
      "dragItems": [
        {
          "id": "i0",
          "text": "Evaluate x > y → True"
        },
        {
          "id": "i1",
          "text": "Evaluate x - y >= 2 → True"
        },
        {
          "id": "i2",
          "text": "The left and expression is True"
        },
        {
          "id": "i3",
          "text": "or skips its right operand; print True"
        },
        {
          "id": "i4",
          "text": "Evaluate not x * y > 25 first"
        },
        {
          "id": "i5",
          "text": "Evaluate x + y == 11 after the left and"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "png-q080",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Print walking targets from 10 minutes in week 1 through 50 minutes in week 5.",
      "explanation": "range(1, 6) supplies 1, 2, 3, 4, 5 because the stop is exclusive. A for loop binds week on each iteration; the offered while version does not initialize or advance it.",
      "code": "[1]\n    print(f\"You should walk for {week * 10} minutes in week {week}\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "for minutes in range(1, 50):"
        },
        {
          "id": "i0_1",
          "text": "for week in range(6, 1):"
        },
        {
          "id": "i0_2",
          "text": "for week in range(1, 6):"
        },
        {
          "id": "i0_3",
          "text": "while week in range(1, 6):"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Loop header",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        }
      ]
    },
    {
      "id": "png-q081",
      "chapter": "practice-1",
      "type": "single",
      "question": "Which keyword is a placeholder for a loop body to be implemented later?",
      "explanation": "pass is a valid no-operation statement. break exits a loop; continue skips to the next iteration; while starts a loop rather than filling an empty body.",
      "code": "for x in range(1, 5):\n    [placeholder]",
      "options": [
        "pass",
        "break",
        "continue",
        "while"
      ],
      "correct": 0
    },
    {
      "id": "png-q082",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Complete calcSubtotal to calculate and return an amount including sales tax.",
      "explanation": "def declares the function. The two input values must be parameters, followed by a colon. The computed subtotal, rather than an input or an empty return, is returned to the caller.",
      "code": "[1][2]\n    subtotal = amount * (1 + salesTaxRate)\n    [3]",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "function calcSubtotal"
        },
        {
          "id": "i0_1",
          "text": "def calcSubtotal"
        },
        {
          "id": "i0_2",
          "text": "calcSubtotal"
        },
        {
          "id": "i1_0",
          "text": "()"
        },
        {
          "id": "i1_1",
          "text": "():"
        },
        {
          "id": "i1_2",
          "text": "(amount, subtotal, calcSubtotal):"
        },
        {
          "id": "i1_3",
          "text": "(amount, salesTaxRate):"
        },
        {
          "id": "i2_0",
          "text": "return"
        },
        {
          "id": "i2_1",
          "text": "return amount"
        },
        {
          "id": "i2_2",
          "text": "return subtotal"
        },
        {
          "id": "i2_3",
          "text": "return salesTaxRate"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Definition",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Parameters",
          "correctItemId": "i1_3",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Return",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        }
      ]
    },
    {
      "id": "png-q083",
      "chapter": "practice-1",
      "type": "single",
      "question": "What happens when order1 is calculated?",
      "explanation": "The No order with zero shipping enters elif and executes pass. No branch has assigned local subtotal, so return subtotal raises UnboundLocalError. pass does not supply a default result; order1 is never successfully assigned.",
      "code": "def calcTotal(taxable, amount, salesTax, shipping):\n    if taxable == \"Yes\":\n        subtotal = amount + (1 * salesTax) + shipping\n    elif shipping == 0:\n        pass\n    else:\n        subtotal = amount + shipping\n    return subtotal\norder1 = calcTotal(\"No\", 500, .07, 0)\nprint(\"Your order total is\", order1)",
      "options": [
        "500.07",
        "500",
        "An error is raised",
        "535"
      ],
      "correct": 2
    },
    {
      "id": "png-q084",
      "chapter": "practice-1",
      "type": "single",
      "question": "Which call stores the returned calculation in order_total?",
      "explanation": "Call the function by its name and parentheses, then assign its return value with =. The result is 535.0. Python needs neither call nor def at the call site.",
      "code": "def subtotal(order_amt, sales_tax):\n    subtotal = float(order_amt) * (1 + float(sales_tax))\n    return subtotal",
      "options": [
        "order_total(subtotal(500, .07))",
        "order_total = call subtotal(500, .07)",
        "order_total = subtotal(500, .07)",
        "order_total = def subtotal(500, .07)"
      ],
      "correct": 2
    },
    {
      "id": "png-q085",
      "chapter": "practice-1",
      "type": "single",
      "question": "Which symbol begins a Python line comment outside a string?",
      "explanation": "# begins a comment through the end of a physical line. // is floor division in Python. /* is C-style syntax, not a Python or HTML comment; HTML comments use <!-- -->. A quote starts a string literal.",
      "options": [
        "/*",
        "'",
        "//",
        "#"
      ],
      "correct": 3
    },
    {
      "id": "png-q086",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Select the symbol for EXPLICIT continuation of a Python source line. The output must stay on one line. Note that the surrounding parentheses already allow implicit continuation.",
      "explanation": "A single backslash at the end of a physical source line explicitly continues it. Inside parentheses, adjacent string literals can also continue without a backslash. The escape sequences \\n and \\t mean newline and tab when used inside strings; they are not this source-line continuation.",
      "code": "print(f\"Your sales representative is Nicole, you are in the East region, \" [1]\n      \"and you are based in the Potomac office.\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "\\"
        },
        {
          "id": "i0_1",
          "text": "\\\\"
        },
        {
          "id": "i0_2",
          "text": "\\n"
        },
        {
          "id": "i0_3",
          "text": "\\t"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Continuation symbol",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        }
      ]
    },
    {
      "id": "png-q087",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Complete this unittest structure. Does correct syntax necessarily make its assertion pass?",
      "explanation": "Use unittest.TestCase, self.assertEqual and the __name__ main guard. The completed test RUNS but FAILS: 2 + 8 is 10 and a + b is 9. Correct test structure does not imply the tested values are equal.",
      "code": "import unittest\na = 3\nb = 6\nclass Test_Example_UnitTest(unittest.[1]):\n    def test_equal(self):\n        self.[2](2 + 8, a + b)\nif [3] == \"__main__\":\n    unittest.main()",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "TestCase"
        },
        {
          "id": "i0_1",
          "text": "TestAssert"
        },
        {
          "id": "i1_0",
          "text": "assertEqual"
        },
        {
          "id": "i1_1",
          "text": "assertTrue"
        },
        {
          "id": "i1_2",
          "text": "assertIn"
        },
        {
          "id": "i2_0",
          "text": "__name__"
        },
        {
          "id": "i2_1",
          "text": "_name_"
        },
        {
          "id": "i2_2",
          "text": "name"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Base class",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "Assertion",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Main guard",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q088",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Read and display all text when work.txt exists. Assume an existing path is a readable regular file.",
      "explanation": "os.path.exists checks whether the path exists. read() returns all remaining text, which must then be printed; merely assigning it does not display it. The with block closes the handle automatically. readline(), not the nonexistent readfirstline(), would read just one line.",
      "code": "import os.path\nif os.path.[1](\"work.txt\"):\n    with open(\"work.txt\", \"r\") as workFile:\n        workFileText = [2]\n        print(workFileText)\nelse:\n    print(\"The work file is not in this folder.\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "exists"
        },
        {
          "id": "i0_1",
          "text": "file_exists"
        },
        {
          "id": "i0_2",
          "text": "file"
        },
        {
          "id": "i1_0",
          "text": "workFile.readfirstline()"
        },
        {
          "id": "i1_1",
          "text": "workFile.read()"
        },
        {
          "id": "i1_2",
          "text": "workFile.seek()"
        },
        {
          "id": "i1_3",
          "text": "workFile.readfirst()"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Existence check",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Read contents",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        }
      ]
    },
    {
      "id": "png-q089",
      "chapter": "practice-1",
      "type": "drag_drop",
      "question": "Declare location first, repeatedly ask until a valid direction is entered, then print the accepted response.",
      "explanation": "The initial input precedes the condition. The indented second input updates response on each invalid attempt, preventing an endless loop. The final unindented print runs only after a valid response exits the loop.",
      "dragItems": [
        {
          "id": "i0",
          "text": "location = [\"North\", \"South\", \"West\", \"East\"]"
        },
        {
          "id": "i1",
          "text": "response = input(\"Enter North, South, West, or East for a location.\")"
        },
        {
          "id": "i2",
          "text": "while response not in location:"
        },
        {
          "id": "i3",
          "text": "    print(\"Try again.\")"
        },
        {
          "id": "i4",
          "text": "    response = input(\"Enter North, South, West, or East for a location.\")"
        },
        {
          "id": "i5",
          "text": "print(response)"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Line 5",
          "correctItemId": "i4"
        },
        {
          "id": "z5",
          "label": "Line 6",
          "correctItemId": "i5"
        }
      ]
    },
    {
      "id": "png-q090",
      "chapter": "practice-1",
      "type": "multiple",
      "question": "Which TWO statements are true about this log-writing code?",
      "explanation": "Mode w creates a missing file or truncates an existing file. Appending requires mode a. A with context closes the file on exit, making explicit close redundant; it does not promise to remove the Python object from memory.",
      "code": "with open(\"log.txt\", \"w\") as file:\n    file.write(\"Daily Log\")\n    file.close()",
      "options": [
        "A file.open() statement must be added.",
        "The log is overwritten each time it is opened.",
        "write appends to the end of existing contents.",
        "The explicit close call is unnecessary."
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "png-q091",
      "chapter": "practice-1",
      "type": "single",
      "question": "In a normal Python script invocation, what does sys.argv[0] represent?",
      "explanation": "sys.argv is a list of command-line strings. Index 0 is the script name/path used for invocation; user-supplied arguments start at index 1. Python does not interpret these strings as functions or classes automatically.",
      "options": [
        "The script file name or path.",
        "The main class.",
        "The first function.",
        "The first user-supplied argument."
      ],
      "correct": 0
    },
    {
      "id": "png-q092",
      "chapter": "practice-1",
      "type": "single",
      "question": "Calculate the TOTAL loan including principal and fees, with a 5% increase applied to their sum. Which replacement is correct?",
      "explanation": "The factor 1.05 includes the original amount plus 5%. Parentheses make the sum 20500 before multiplication, producing 21525.0. Multiplying by .05 alone would calculate only the increase, not the total loan.",
      "code": "carLoan = 20000\nintRate = 1.05\nlicenseFee = 500\ntotalLoan = carLoan + licenseFee * intRate",
      "options": [
        "totalLoan = carLoan - licenseFee * intRate",
        "totalLoan = (carLoan + licenseFee) * intRate",
        "totalLoan = carLoan + (licenseFee * intRate)",
        "totalLoan = carLoan + licenseFee / intRate"
      ],
      "correct": 1
    },
    {
      "id": "png-q093",
      "chapter": "practice-1",
      "type": "single",
      "question": "Which unittest assertion verifies that a and b refer to the exact same object?",
      "explanation": "assertIs tests identity (a is b). assertEqual tests values; assertIn tests collection membership. In assertTrue(a, b), b would be a failure message, not a second value to compare.",
      "code": "def test_memory(self):\n    a = 3\n    b = a\n    # assertion here",
      "options": [
        "self.assertEqual(a, b)",
        "self.assertIs(a, b)",
        "self.assertIn(a, b)",
        "self.assertTrue(a, b)"
      ],
      "correct": 1
    },
    {
      "id": "png-q094",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Raise an exception a caller can catch and print the closing message after the try block even when it fails. Assume valid numeric inputs.",
      "explanation": "raise is a keyword followed by an exception object. finally executes when the try block exits normally or by an exception, including a re-raised exception. else would run only after successful try execution. Invalid text entered before try is not handled by this code.",
      "code": "x = float(input(\"Enter a number. \"))\ny = float(input(\"Enter a number to divide by. \"))\ntry:\n    print(f\"The answer is {x/y}.\")\nexcept ZeroDivisionError:\n    [1] Exception(\"You cannot divide by zero\")\n[2]:\n    print(\"Thank you for playing.\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "throw"
        },
        {
          "id": "i0_1",
          "text": "raise"
        },
        {
          "id": "i0_2",
          "text": "raise()"
        },
        {
          "id": "i0_3",
          "text": "throw()"
        },
        {
          "id": "i1_0",
          "text": "finally"
        },
        {
          "id": "i1_1",
          "text": "result"
        },
        {
          "id": "i1_2",
          "text": "else"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Raise keyword",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Final clause",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ]
    },
    {
      "id": "png-q095",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Complete the inventory rounding operations.",
      "explanation": "ceil rounds toward positive infinity, floor toward negative infinity, and trunc toward zero. For 77.4 the results are 78, 77 and 77. For negative nonintegers, floor and trunc differ. There is no math.round function; round is built in.",
      "code": "[1]\naverage_inventory = 77.4\nupper_bound = [2](average_inventory)\nlower_bound = [3](average_inventory)\nbound = [4](average_inventory)\nprint(upper_bound, lower_bound, bound)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "import math"
        },
        {
          "id": "i0_1",
          "text": "use math"
        },
        {
          "id": "i0_2",
          "text": "sys.math"
        },
        {
          "id": "i1_0",
          "text": "math.ceil"
        },
        {
          "id": "i1_1",
          "text": "math.trunc"
        },
        {
          "id": "i1_2",
          "text": "math.floor"
        },
        {
          "id": "i2_0",
          "text": "math.ceil"
        },
        {
          "id": "i2_1",
          "text": "math.trunc"
        },
        {
          "id": "i2_2",
          "text": "math.floor"
        },
        {
          "id": "i3_0",
          "text": "math.trunc"
        },
        {
          "id": "i3_1",
          "text": "math.ceil"
        },
        {
          "id": "i3_2",
          "text": "math.floor"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Import",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "upper_bound",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "lower_bound",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        },
        {
          "id": "z3",
          "label": "bound (truncate)",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2"
          ]
        }
      ]
    },
    {
      "id": "png-q096",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Select one random country, shuffle a COPY of the list for result2, and select two distinct entries for result3.",
      "explanation": "choice returns one item. shuffle changes a list in place and returns None, so result2 = random.shuffle(countries) would not store a shuffled list. Copy first, then shuffle that copy. sample returns a new list of two entries without replacement.",
      "code": "[1]\ncountries = [\"USA\", \"Canada\", \"Mexico\", \"Japan\", \"Spain\", \"Kenya\"]\nresult1 = random.[2]\nresult2 = countries.copy()\nrandom.[3]\nresult3 = random.[4]",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "import shuffle"
        },
        {
          "id": "i0_1",
          "text": "import random"
        },
        {
          "id": "i0_2",
          "text": "import choice"
        },
        {
          "id": "i0_3",
          "text": "import sample"
        },
        {
          "id": "i1_0",
          "text": "choice(countries)"
        },
        {
          "id": "i1_1",
          "text": "shuffle(countries)"
        },
        {
          "id": "i1_2",
          "text": "sample(countries, 2)"
        },
        {
          "id": "i2_0",
          "text": "shuffle(result2)"
        },
        {
          "id": "i2_1",
          "text": "choice(result2)"
        },
        {
          "id": "i2_2",
          "text": "sample(result2, 2)"
        },
        {
          "id": "i3_0",
          "text": "sample(countries, 2)"
        },
        {
          "id": "i3_1",
          "text": "shuffle(countries)"
        },
        {
          "id": "i3_2",
          "text": "choice(countries)"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Import",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "One country",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Shuffle result2",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        },
        {
          "id": "z3",
          "label": "Two countries",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2"
          ]
        }
      ]
    },
    {
      "id": "png-q097",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Match each explicitly module-qualified operation with its standard-library module.",
      "explanation": "io.open handles file I/O; the ordinary built-in open is also available without any import. math.ceil rounds upward, os.mkdir creates a directory, and sys.exit raises SystemExit. A statistical mean would use statistics.mean, not math.ceil.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "io"
        },
        {
          "id": "i0_1",
          "text": "os"
        },
        {
          "id": "i0_2",
          "text": "math"
        },
        {
          "id": "i0_3",
          "text": "sys"
        },
        {
          "id": "i1_0",
          "text": "io"
        },
        {
          "id": "i1_1",
          "text": "os"
        },
        {
          "id": "i1_2",
          "text": "math"
        },
        {
          "id": "i1_3",
          "text": "sys"
        },
        {
          "id": "i2_0",
          "text": "io"
        },
        {
          "id": "i2_1",
          "text": "os"
        },
        {
          "id": "i2_2",
          "text": "math"
        },
        {
          "id": "i2_3",
          "text": "sys"
        },
        {
          "id": "i3_0",
          "text": "io"
        },
        {
          "id": "i3_1",
          "text": "os"
        },
        {
          "id": "i3_2",
          "text": "math"
        },
        {
          "id": "i3_3",
          "text": "sys"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "open() when accessed as module.open()",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "ceil()",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "mkdir()",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        },
        {
          "id": "z3",
          "label": "exit()",
          "correctItemId": "i3_3",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2",
            "i3_3"
          ]
        }
      ]
    },
    {
      "id": "png-q098",
      "chapter": "practice-1",
      "type": "drag_drop",
      "question": "Calculate a circle area using a decimal radius and display two decimal places.",
      "explanation": "Import math to obtain math.pi. float permits a decimal radius. ** is exponentiation, whereas ^ is bitwise XOR. .2f formats the calculated area with exactly two digits after the decimal point.",
      "dragItems": [
        {
          "id": "i0",
          "text": "import math"
        },
        {
          "id": "i1",
          "text": "pi = math.pi"
        },
        {
          "id": "i2",
          "text": "radius = float(input(\"Enter a radius for a circle.\"))"
        },
        {
          "id": "i3",
          "text": "area = pi * radius ** 2"
        },
        {
          "id": "i4",
          "text": "print(f\"A circle with a radius of {radius} will have an area of {area:.2f}.\")"
        },
        {
          "id": "i5",
          "text": "radius = int(input(\"Enter a radius for a circle.\"))"
        },
        {
          "id": "i6",
          "text": "area = pi * radius ^ 2"
        },
        {
          "id": "i7",
          "text": "use math"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Line 5",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "png-q099",
      "chapter": "practice-1",
      "type": "multiple",
      "question": "Which TWO expressions obtain the current local date and time?",
      "explanation": "now() and today() return current local datetime values without a timezone argument here. strptime parses a string using a format, and strftime formats an existing datetime; neither no-argument call shown obtains the current instant.",
      "code": "import datetime\nlog_time = [expression]\nprint(\"entry time:\", log_time)",
      "options": [
        "datetime.datetime.now()",
        "datetime.datetime.today()",
        "datetime.datetime.strptime()",
        "datetime.datetime.strftime()"
      ],
      "correct": [
        0,
        1
      ]
    },
    {
      "id": "png-q100",
      "chapter": "practice-1",
      "type": "numeric",
      "question": "How many cities are printed? Enter a whole number.",
      "explanation": "Four cities are printed: Anchorage, Juneau, Fairbanks and Ketchikan. The print executes before the condition, so Ketchikan is included. break then stops the loop before Sitka and Wasilla.",
      "code": "cities = [\"Anchorage\", \"Juneau\", \"Fairbanks\", \"Ketchikan\", \"Sitka\", \"Wasilla\"]\nfor city in cities:\n    print(f\"{city} is a famous Alaskan city.\")\n    if city == \"Ketchikan\":\n        break",
      "correct": 4
    },
    {
      "id": "png-q101",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Evaluate the final variable values.",
      "explanation": "a **= b makes a 25; b *= c makes b 6; a //= b makes a 4. Floor division is not remainder; 25 % 6 would be 1. c is never reassigned.",
      "code": "a = 5\nb = 2\nc = 3\na **= b\nb *= c\na //= b",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "c == 3",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "b == 6",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "a == 1",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q102",
      "chapter": "practice-1",
      "type": "dropdown",
      "question": "Evaluate these Boolean expressions.",
      "explanation": "10 > 7 > 5 makes the first True. In the second expression, 12 > 10 is True and not makes it False. In the third, multiplication gives 35, so the compared values are 45 and -25; neither comparison is True.",
      "code": "a = 10\nb = 7\nc = 5",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "a > b and b > c",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "a >= c and not (b + c > a)",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "a + b * c == 85 or a - b * c == 15",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q103",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Evaluate these statements about pydoc.",
      "explanation": "pydoc is a Python standard-library module, invoked reliably with python -m pydoc math. Some installations also provide a pydoc command-line wrapper, so claiming no such command can exist would be misleading. pass is a keyword, not a module named pass.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "python -m pydoc math displays documentation for math.",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "pydoc must be separately installed as an independent non-Python executable.",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "pydoc generates documentation for Python modules.",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q104",
      "chapter": "practice-2",
      "type": "multiple",
      "question": "Which TWO changes fix this code?",
      "explanation": "The if header requires a trailing colon and a nonempty indented body. == is the correct equality comparison. Parentheses around this simple condition are optional, not a required repair.",
      "code": "height = 5\nwidth = 5\nif height == width\nprint(\"You have a square\")",
      "options": [
        "Replace == with =.",
        "Indent the print statement.",
        "Add parentheses around the condition.",
        "Add a colon after width."
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "png-q105",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Complete the date display. The sample 2023-01-01 would have weekday 6; the actual current date depends on when the code runs.",
      "explanation": "datetime.datetime.today() includes both date and time. %m, %d and %Y mean two-digit month, two-digit day and four-digit year. weekday() returns Monday=0 through Sunday=6; it is not the Monday=1 convention of isoweekday().",
      "code": "[1]\ncurrent_date = [2]\nprint(current_date)\nprint(\"The current date is\", current_date.strftime(\"[3]\"))\nprint(\"The current weekday is\", current_date.[4])",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "import timeSetting"
        },
        {
          "id": "i0_1",
          "text": "import calendar"
        },
        {
          "id": "i0_2",
          "text": "import datetime"
        },
        {
          "id": "i1_0",
          "text": "datetime.datetime.today()"
        },
        {
          "id": "i1_1",
          "text": "datetime.datetime.day()"
        },
        {
          "id": "i1_2",
          "text": "datetime.datetime.currentdate()"
        },
        {
          "id": "i2_0",
          "text": "%m/%d/%Y"
        },
        {
          "id": "i2_1",
          "text": "%MM%DD%YYYY"
        },
        {
          "id": "i2_2",
          "text": "%mm%dd%yyyy"
        },
        {
          "id": "i3_0",
          "text": "day()"
        },
        {
          "id": "i3_1",
          "text": "weekday"
        },
        {
          "id": "i3_2",
          "text": "weekday()"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Module",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Current datetime",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Date format",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        },
        {
          "id": "z3",
          "label": "Weekday method",
          "correctItemId": "i3_2",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2"
          ]
        }
      ]
    },
    {
      "id": "png-q106",
      "chapter": "practice-2",
      "type": "multiple",
      "question": "Which TWO fixes print every serial number in this tuple?",
      "explanation": "The loop variable product already contains the current string, not an integer index. print(product) displays it directly and must be indented under for. The top-level for stays unindented and keeps its colon.",
      "code": "products = (\"1111\", \"2222\", \"3333\", \"4444\", \"5555\", \"6666\", \"7777\", \"8888\", \"9999\")\nfor product in products:\nprint(products[product])",
      "options": [
        "Remove the colon from for.",
        "Change the body to print(product).",
        "Indent the print statement.",
        "Indent the top-level for statement."
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "png-q107",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Handle both invalid numeric text and division by zero. Complete the exception keywords.",
      "explanation": "Both input conversions must be inside try if ValueError is to be caught. except (ValueError, ZeroDivisionError) handles either conversion failure or an illegal zero divisor. Putting float(input()) before try would leave invalid input unhandled.",
      "code": "[1]:\n    a = float(input(\"Enter a number. \"))\n    b = float(input(\"Enter a number to divide by. \"))\n    print(f\"The answer is {a/b}.\")\n[2] (ValueError, ZeroDivisionError):\n    print(\"This did not work. Did you try to divide by zero or enter an invalid number?\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "attempt"
        },
        {
          "id": "i0_1",
          "text": "try"
        },
        {
          "id": "i0_2",
          "text": "catch"
        },
        {
          "id": "i1_0",
          "text": "catch"
        },
        {
          "id": "i1_1",
          "text": "else"
        },
        {
          "id": "i1_2",
          "text": "except"
        },
        {
          "id": "i1_3",
          "text": "finally"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Attempt",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Handler",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        }
      ]
    },
    {
      "id": "png-q108",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Assume numeric inputs a = 0 and b != 0 and normal process execution. Evaluate these statements.",
      "explanation": "0 divided by a nonzero number is valid, so try succeeds and else executes; except does not. finally executes as the try statement exits either successfully or by an exception. This is not a guarantee against forced process termination.",
      "code": "a = float(input(\"Enter a number. \"))\nb = float(input(\"Enter a number to divide by. \"))\ntry:\n    print(f\"The answer is {a/b}.\")\nexcept ZeroDivisionError:\n    print(\"This did not work. Did you try to divide by zero?\")\nelse:\n    print(\"You successfully divided two numbers.\")\nfinally:\n    print(\"Thank you for playing.\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "finally executes when this try statement exits.",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "Both the try body and the except body execute.",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "The else body executes.",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q109",
      "chapter": "practice-2",
      "type": "single",
      "question": "What kind of error does this code produce?",
      "explanation": "The syntax is valid, but a list of three items has indexes 0, 1 and 2. Accessing index 3 raises IndexError during execution before the print call runs.",
      "code": "trees = [\"Douglas fir\", \"Oak\", \"Balsam fir\"]\nlast_tree = trees[3]\nprint(f\"The last tree is {last_tree}.\")",
      "options": [
        "A logic error only.",
        "A runtime error (IndexError).",
        "A syntax error.",
        "No error."
      ],
      "correct": 1
    },
    {
      "id": "png-q110",
      "chapter": "practice-2",
      "type": "drag_drop",
      "question": "Build a sign-in sheet for seven days and ten students each day.",
      "explanation": "The stop of range is exclusive: 1..7 needs stop 8 and 1..10 needs stop 11. The student loop is nested inside the day loop; its print is indented one further level. This prints 70 student lines.",
      "dragItems": [
        {
          "id": "i0",
          "text": "for classDay in range(1, 8):"
        },
        {
          "id": "i1",
          "text": "    print(f\"Day: {classDay}\")"
        },
        {
          "id": "i2",
          "text": "    for student in range(1, 11):"
        },
        {
          "id": "i3",
          "text": "        print(f\"Student{student} _____________\")"
        },
        {
          "id": "i4",
          "text": "for classDay in range(1, 7):"
        },
        {
          "id": "i5",
          "text": "    for student in range(1, 10):"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "png-q111",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Run a 30-day program but skip the activity message on day 15.",
      "explanation": "for iterates over days 1 through 30. continue skips the rest of day 15 only, so the final activity print is omitted that day. break would incorrectly end the whole program at day 15.",
      "code": "[1] dailyProgram in range(1, [2]):\n    if dailyProgram == 15:\n        print(\"No activity on day 15\")\n        [3]\n    print(f\"This is day {dailyProgram}\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "do"
        },
        {
          "id": "i0_1",
          "text": "for"
        },
        {
          "id": "i0_2",
          "text": "while"
        },
        {
          "id": "i1_0",
          "text": "30"
        },
        {
          "id": "i1_1",
          "text": "31"
        },
        {
          "id": "i1_2",
          "text": "29"
        },
        {
          "id": "i2_0",
          "text": "skip"
        },
        {
          "id": "i2_1",
          "text": "break"
        },
        {
          "id": "i2_2",
          "text": "continue"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Loop keyword",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Exclusive stop",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Skip iteration",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q112",
      "chapter": "practice-2",
      "type": "drag_drop",
      "question": "Reward only staff with monthlySales over 100000. Send skis to North staff in Winter; send golf balls to all other qualifying staff.",
      "explanation": "The outer strict threshold excludes 100000 and below. Inside it, both North and Winter must hold to send skis. The inner else sends golf balls to every other qualifying combination. Staff below the threshold get neither reward.",
      "dragItems": [
        {
          "id": "i0",
          "text": "if monthlySales > 100000:"
        },
        {
          "id": "i1",
          "text": "    if region == \"North\" and season == \"Winter\":"
        },
        {
          "id": "i2",
          "text": "        print(\"Send skis\")"
        },
        {
          "id": "i3",
          "text": "    else:"
        },
        {
          "id": "i4",
          "text": "        print(\"Send golf balls\")"
        },
        {
          "id": "i5",
          "text": "if monthlySales >= 100000:"
        },
        {
          "id": "i6",
          "text": "    if region == \"North\" or season == \"Winter\":"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        },
        {
          "id": "z4",
          "label": "Line 5",
          "correctItemId": "i4"
        }
      ]
    },
    {
      "id": "png-q113",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Remove EVERY city with a name longer than five characters. The loop deliberately traverses a copy so removals do not skip elements.",
      "explanation": "len counts characters and list.remove removes a matching value. Iterating cities[:] is essential here: removing from the same list being traversed can shift indexes and skip cities. With the copy, the remaining list is [\"Sitka\"].",
      "code": "cities = [\"Anchorage\", \"Juneau\", \"Fairbanks\", \"Ketchikan\", \"Sitka\", \"Wasilla\"]\nfor city in cities[:]:\n    if [1](city) > 5:\n        cities.[2](city)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "len"
        },
        {
          "id": "i0_1",
          "text": "length"
        },
        {
          "id": "i0_2",
          "text": "append"
        },
        {
          "id": "i1_0",
          "text": "remove"
        },
        {
          "id": "i1_1",
          "text": "delete"
        },
        {
          "id": "i1_2",
          "text": "slice"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Length",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Remove current city",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ]
    },
    {
      "id": "png-q114",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Evaluate the returned scores.",
      "explanation": "score1 (3000, 3) misses the strict first threshold but matches elif, giving 3250. score2 (2000, 2) reaches else, giving 2050. score3 (5000, 5) matches if, giving 5300.",
      "code": "def score_adj(score, rank):\n    new_score = score\n    if score > 3000 and rank > 3:\n        new_score += 300\n    elif score > 2500 and rank > 2:\n        new_score += 250\n    else:\n        new_score += 50\n    return new_score\nscore1 = score_adj(3000, 3)\nscore2 = score_adj(2000, 2)\nscore3 = score_adj(5000, 5)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "score1 == 3300",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "score3 == 5300",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "score2 == 2250",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q115",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Generate ten pairs: a multiple of 3 from 3 through 99 inclusive, then a float in [0, 1).",
      "explanation": "randrange(3, 102, 3) includes 99 because the exclusive stop is 102; stop 99 would omit it. randint accepts only two bounds, not a step. random() returns a float at least 0 and strictly less than 1. The import is included so the unqualified names are defined.",
      "code": "from random import randrange, random\nfor i in range(10):\n    print([1])\n    print([2])",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "randint(3, 102, 3)"
        },
        {
          "id": "i0_1",
          "text": "randrange(3, 99, 3)"
        },
        {
          "id": "i0_2",
          "text": "randrange(3, 102, 3)"
        },
        {
          "id": "i1_0",
          "text": "random()"
        },
        {
          "id": "i1_1",
          "text": "randint()"
        },
        {
          "id": "i1_2",
          "text": "random(0, 1)"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Multiple of three",
          "correctItemId": "i0_2",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Random fraction",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ]
    },
    {
      "id": "png-q116",
      "chapter": "practice-2",
      "type": "multiple",
      "question": "Which TWO snippets complete the import and first-line read?",
      "explanation": "import os.path makes os.path.isfile available. readline() reads the first line on its first call; read() would read the whole remaining file. The with block closes the handle automatically.",
      "code": "# import module\nif os.path.isfile(\"config.txt\"):\n    with open(\"config.txt\", \"r\") as file:\n        print(file.[read method])",
      "options": [
        "read()",
        "readline()",
        "import io",
        "import os.path"
      ],
      "correct": [
        1,
        3
      ]
    },
    {
      "id": "png-q117",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Choose an assertion for truth, membership and class-instance checking.",
      "explanation": "assertTrue checks the truth of 5 + 3 * 4 == 17. assertIn checks whether clock occurs in b. assertIsInstance(game, Game) checks whether the object belongs to the class or its subclasses. The alternative names assertInstance and assertInInstance are not unittest methods.",
      "code": "def test1(self):\n    self.[1](5 + 3 * 4 == 17)\ndef test2(self):\n    a = \"clock\"\n    b = [\"clock\", \"watch\", \"phone\"]\n    self.[2](a, b)\ndef test3(self):\n    game = Game()\n    self.[3](game, Game)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "assertTrue"
        },
        {
          "id": "i0_1",
          "text": "assertEqual"
        },
        {
          "id": "i0_2",
          "text": "assertIs"
        },
        {
          "id": "i1_0",
          "text": "assertIs"
        },
        {
          "id": "i1_1",
          "text": "assertIn"
        },
        {
          "id": "i1_2",
          "text": "assertInInstance"
        },
        {
          "id": "i2_0",
          "text": "assertInstance"
        },
        {
          "id": "i2_1",
          "text": "assertIs"
        },
        {
          "id": "i2_2",
          "text": "assertIsInstance"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "test1",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "test2",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "test3",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q118",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Read integer dimensions and right-align the area in a field of width six. Assume the result fits within six characters.",
      "explanation": "int(input(...)) converts entered text to an integer. :>6 requests right alignment with a MINIMUM width of six, not a maximum length or truncation. format substitutes the calculated area into that field.",
      "code": "width = [1]([2](\"Enter a width: \"))\nheight = [3]([4](\"Enter a height: \"))\narea = \"We have [5] square feet for the area.\"\nprint([6])",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "int"
        },
        {
          "id": "i0_1",
          "text": "float"
        },
        {
          "id": "i0_2",
          "text": "input"
        },
        {
          "id": "i1_0",
          "text": "int"
        },
        {
          "id": "i1_1",
          "text": "float"
        },
        {
          "id": "i1_2",
          "text": "input"
        },
        {
          "id": "i2_0",
          "text": "int"
        },
        {
          "id": "i2_1",
          "text": "float"
        },
        {
          "id": "i2_2",
          "text": "input"
        },
        {
          "id": "i3_0",
          "text": "int"
        },
        {
          "id": "i3_1",
          "text": "float"
        },
        {
          "id": "i3_2",
          "text": "input"
        },
        {
          "id": "i4_0",
          "text": "{:>6}"
        },
        {
          "id": "i4_1",
          "text": "{align.right(6)}"
        },
        {
          "id": "i4_2",
          "text": "{ralign(6)}"
        },
        {
          "id": "i5_0",
          "text": "area.format(width * height)"
        },
        {
          "id": "i5_1",
          "text": "frightalign(area)"
        },
        {
          "id": "i5_2",
          "text": "area(width * height)"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Width conversion",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Width input",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Height conversion",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        },
        {
          "id": "z3",
          "label": "Height input",
          "correctItemId": "i3_2",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2"
          ]
        },
        {
          "id": "z4",
          "label": "Field",
          "correctItemId": "i4_0",
          "optionIds": [
            "i4_0",
            "i4_1",
            "i4_2"
          ]
        },
        {
          "id": "z5",
          "label": "Print expression",
          "correctItemId": "i5_0",
          "optionIds": [
            "i5_0",
            "i5_1",
            "i5_2"
          ]
        }
      ]
    },
    {
      "id": "png-q119",
      "chapter": "practice-2",
      "type": "single",
      "question": "For the command python testargs.py Hello, what does sys.argv[0] contain?",
      "explanation": "sys.argv contains [\"testargs.py\", \"Hello\"] in this invocation, so len is 2, index 0 is the script name and index 1 is Hello.",
      "code": "import sys\nx = len(sys.argv)\nprint(x)\nprint(sys.argv[0])\nprint(sys.argv[1])",
      "options": [
        "testargs.py",
        "sys.argv",
        "The number of supplied arguments.",
        "Hello"
      ],
      "correct": 0
    },
    {
      "id": "png-q120",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Write user text to results.txt, creating it if missing and REPLACING any existing contents. Release the handle afterward.",
      "explanation": "open with w creates or truncates a file. Mode a also creates missing files, but appends instead of replacing existing content. write outputs the text and close releases the file resource; the Python variable may still reference the closed object.",
      "code": "writeFile = [1](\"results.txt\", \"[2]\")\ntoResults = input(\"What do you want to write to the results? \")\nwriteFile.[3](toResults)\nwriteFile.[4]",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "fetch"
        },
        {
          "id": "i0_1",
          "text": "open"
        },
        {
          "id": "i0_2",
          "text": "write"
        },
        {
          "id": "i1_0",
          "text": "a"
        },
        {
          "id": "i1_1",
          "text": "r"
        },
        {
          "id": "i1_2",
          "text": "w"
        },
        {
          "id": "i2_0",
          "text": "feed"
        },
        {
          "id": "i2_1",
          "text": "write"
        },
        {
          "id": "i2_2",
          "text": "writeln"
        },
        {
          "id": "i3_0",
          "text": "close()"
        },
        {
          "id": "i3_1",
          "text": "drop()"
        },
        {
          "id": "i3_2",
          "text": "end()"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Open function",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Mode",
          "correctItemId": "i1_2",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Write method",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        },
        {
          "id": "z3",
          "label": "Release handle",
          "correctItemId": "i3_0",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2"
          ]
        }
      ]
    },
    {
      "id": "png-q121",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Append a new line to an existing nonempty file. If the file is missing, create it without a leading blank line. Assume an existing path is a regular, nonempty file.",
      "explanation": "a preserves existing contents and appends; w creates a missing file. prefix adds a newline only for an existing nonempty file, avoiding a blank first line in a new file. The with block closes the handle.",
      "code": "import os\nif os.path.isfile(\"results.txt\"):\n    mode = \"[1]\"\n    prefix = \"[3]\"\nelse:\n    mode = \"[2]\"\n    prefix = \"\"\ntoResults = input(\"What do you want to write to the log? \")\nwith open(\"results.txt\", mode) as writeFile:\n    writeFile.write(prefix + toResults)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "a"
        },
        {
          "id": "i0_1",
          "text": "r"
        },
        {
          "id": "i0_2",
          "text": "w"
        },
        {
          "id": "i1_0",
          "text": "w"
        },
        {
          "id": "i1_1",
          "text": "r"
        },
        {
          "id": "i1_2",
          "text": "r+"
        },
        {
          "id": "i2_0",
          "text": "\\n"
        },
        {
          "id": "i2_1",
          "text": "\\t"
        },
        {
          "id": "i2_2",
          "text": "\\r\\r"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Existing-file mode",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Missing-file mode",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Line separator",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q122",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Delete results.txt only when it is a regular file, not a directory.",
      "explanation": "import os provides os.path.isfile and os.remove. isfile specifically excludes directories, while exists alone would also be True for directories. os.remove deletes a file; close only releases an open handle.",
      "code": "import [1]\nif os.path.[2](\"results.txt\"):\n    os.[3](\"results.txt\")\n    print(\"The results file has been removed.\")\nelse:\n    print(\"There was no results file to remove.\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "os"
        },
        {
          "id": "i0_1",
          "text": "os.file"
        },
        {
          "id": "i0_2",
          "text": "filesystem"
        },
        {
          "id": "i1_0",
          "text": "isfile"
        },
        {
          "id": "i1_1",
          "text": "exists"
        },
        {
          "id": "i1_2",
          "text": "present"
        },
        {
          "id": "i2_0",
          "text": "delete"
        },
        {
          "id": "i2_1",
          "text": "remove"
        },
        {
          "id": "i2_2",
          "text": "close"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Module",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Regular-file test",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        },
        {
          "id": "z2",
          "label": "Delete",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2"
          ]
        }
      ]
    },
    {
      "id": "png-q123",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Evaluate the math statements.",
      "explanation": "math.fabs(-14) is 14.0. math.fmod(21, -14) is 7.0: its remainder has the sign of the dividend. math.frexp(21) returns (0.65625, 5), satisfying 21 == 0.65625 * 2 ** 5.",
      "code": "import math\na = -14\nb = 21\nc = math.fabs(a)\nd = math.fmod(b, a)\ne = math.frexp(b)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "frexp returns a pair containing mantissa and exponent.",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "c == 14.0",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "d == 1.5",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q124",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Match each literal to its default Python type.",
      "explanation": "False without quotes is a Boolean literal. 1 is an int, 1.0 is a float even with a zero fractional part, and \"False\" is text because it is quoted.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "1"
        },
        {
          "id": "i0_1",
          "text": "False"
        },
        {
          "id": "i0_2",
          "text": "1.0"
        },
        {
          "id": "i0_3",
          "text": "\"False\""
        },
        {
          "id": "i1_0",
          "text": "1"
        },
        {
          "id": "i1_1",
          "text": "False"
        },
        {
          "id": "i1_2",
          "text": "1.0"
        },
        {
          "id": "i1_3",
          "text": "\"False\""
        },
        {
          "id": "i2_0",
          "text": "1"
        },
        {
          "id": "i2_1",
          "text": "False"
        },
        {
          "id": "i2_2",
          "text": "1.0"
        },
        {
          "id": "i2_3",
          "text": "\"False\""
        },
        {
          "id": "i3_0",
          "text": "1"
        },
        {
          "id": "i3_1",
          "text": "False"
        },
        {
          "id": "i3_2",
          "text": "1.0"
        },
        {
          "id": "i3_3",
          "text": "\"False\""
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Boolean",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Integer",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "String",
          "correctItemId": "i2_3",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        },
        {
          "id": "z3",
          "label": "Float",
          "correctItemId": "i3_2",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2",
            "i3_3"
          ]
        }
      ]
    },
    {
      "id": "png-q125",
      "chapter": "practice-2",
      "type": "single",
      "question": "When executed normally, what does this script DISPLAY?",
      "explanation": "The function returns True for 8, making the assertion succeed silently. There is no print call. A false assertion would raise AssertionError (unless assertions are disabled with optimization). This question is about displayed output, not the function return value.",
      "code": "def is_quarter(num):\n    if num % 4 == 0:\n        return True\n    else:\n        return False\nassert is_quarter(8) == True",
      "options": [
        "An AssertionError traceback.",
        "Nothing.",
        "True",
        "False"
      ],
      "correct": 1
    },
    {
      "id": "png-q126",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Complete the not-equal comparison.",
      "explanation": "!= means not equal. Neither =! nor !> is a valid Python comparison operator. int converts the entered sum from text before comparing it with integer 10.",
      "code": "a = 3\nb = 7\nresult = int(input(\"What is a + b? \"))\nif result [1] 10:\n    print(\"You are incorrect. Try again\")\nelse:\n    print(\"You are correct.\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "!="
        },
        {
          "id": "i0_1",
          "text": "=!"
        },
        {
          "id": "i0_2",
          "text": "!>"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Operator",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        }
      ]
    },
    {
      "id": "png-q127",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Evaluate these results.",
      "explanation": "3 ** 2 is 9 and the outer minus makes c -9. 2 ** 3 is 8. Unary plus preserves the sign, so +(c * b) is -18, not 18.",
      "code": "a = 3\nb = 2\nc = -(a ** b)\nd = +(c * b)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "c == -9",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "b ** a == 8",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "d == 18",
          "correctItemId": "i2_1",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q128",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Select with start index 1 inclusive, stop index 8 exclusive and step 5, then print the selected tuple entries.",
      "explanation": "slice is a built-in constructor, not a tuple method. The slice selects indexes 1 and 6, producing (\"2222\", \"7777\"). Applying a slice to a tuple returns a tuple, not a list. The explicitly exclusive stop avoids the ambiguous phrase ending at the ninth item.",
      "code": "products = (\"1111\", \"2222\", \"3333\", \"4444\", \"5555\", \"6666\", \"7777\", \"8888\", \"9999\")\ntester = [1]\nprint([2])",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "slice(1, 8, 5)"
        },
        {
          "id": "i0_1",
          "text": "products.slice(1, 8, 5)"
        },
        {
          "id": "i0_2",
          "text": "slice(2, 9, 5)"
        },
        {
          "id": "i1_0",
          "text": "products(tester)"
        },
        {
          "id": "i1_1",
          "text": "products[tester]"
        },
        {
          "id": "i1_2",
          "text": "products.append(tester)"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Slice object",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Selection",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ]
    },
    {
      "id": "png-q129",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Evaluate these statements with the required import included.",
      "explanation": "math.isnan returns a Boolean: c is True for NaN and d is False for 33.0. isnan is not built in and must be imported; omitting the first line would cause NameError. float(\"nan\") itself is valid.",
      "code": "from math import isnan\na = float(\"nan\")\nb = float(33)\nc = isnan(a)\nd = isnan(b)",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "d equals 33.0.",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "The script fails with a runtime error.",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "c is True.",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q130",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Print every city/state pair, followed by Capital only after Springfield Illinois.",
      "explanation": "The nested for loops produce all nine pairs with city changing more slowly. The inner if checks the one pair that needs an extra line, so Capital appears immediately after Springfield Illinois.",
      "code": "cities = [\"Orange\", \"Springfield\", \"Auburn\"]\nstates = [\"Florida\", \"Ohio\", \"Illinois\"]\n[1] x in cities:\n    [2] y in states:\n        print(x, y)\n        [3] x == \"Springfield\" and y == \"Illinois\":\n            print(\"Capital\")",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "for"
        },
        {
          "id": "i0_1",
          "text": "if"
        },
        {
          "id": "i1_0",
          "text": "for"
        },
        {
          "id": "i1_1",
          "text": "if"
        },
        {
          "id": "i2_0",
          "text": "if"
        },
        {
          "id": "i2_1",
          "text": "for"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Outer loop",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "Inner loop",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "Conditional",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-q131",
      "chapter": "practice-2",
      "type": "single",
      "question": "Which definition matches the function call and its two inputs?",
      "explanation": "The definition must be named area because the call uses area. x and y are its two required parameters. z is calculated in the body, not supplied by this two-argument call. The function prints 50 and implicitly returns None.",
      "code": "# definition here\n    z = x * y\n    print(z)\narea(5, 10)",
      "options": [
        "def calculate_area(x, y):",
        "def calculate_area(x, y, z):",
        "def area(x, y, z):",
        "def area(x, y):"
      ],
      "correct": 3
    },
    {
      "id": "png-q132",
      "chapter": "practice-2",
      "type": "multiple",
      "question": "Which TWO method names are discovered by the DEFAULT unittest loader? Its method-name prefix is test.",
      "explanation": "The default prefix is the string test, not necessarily test_. Consequently BOTH test_territory and testcase_territory are discovered. _test_territory starts with an underscore and territory_test ends with test, so neither matches. The underscore style is conventional, not a discovery requirement.",
      "code": "import unittest\nclass TestMain(unittest.TestCase):\n    def [name](self):\n        a = \"North\"\n        b = \"North\"\n        self.assertEqual(a, b)\nif __name__ == \"__main__\":\n    unittest.main()",
      "options": [
        "_test_territory",
        "testcase_territory",
        "test_territory",
        "territory_test"
      ],
      "correct": [
        1,
        2
      ]
    },
    {
      "id": "png-q133",
      "chapter": "practice-2",
      "type": "single",
      "question": "Which print call uses percent-style formatting to display two decimal places?",
      "explanation": "%.2f with % formats a floating-point number to two decimal places, displaying 37.38 here. floor and round without a precision argument yield an integer-style result instead. {:0.2f} is a str.format field, not a percent-format conversion.",
      "code": "length = 12.5\nprice = 2.99\ncost = length * price",
      "options": [
        "print(\"Your total cost is\", math.floor(cost))",
        "print(\"Your total cost is %.2f\" % cost)",
        "print(\"Your total cost is\", round(cost))",
        "print(\"Your total cost is {:0.2f}\" % cost)"
      ],
      "correct": 1
    },
    {
      "id": "png-q134",
      "chapter": "practice-2",
      "type": "drag_drop",
      "question": "Arrange these groups from higher to lower precedence, then place the ordinary assignment statement last.",
      "explanation": "Arithmetic is grouped before comparisons, membership and identity tests; logical not, and, or combine the resulting values. Ordinary = assignment is a statement executed after evaluating its right-hand side, not an ordinary expression operator. Comparisons can chain and short-circuit; precedence does not force every operand to execute.",
      "dragItems": [
        {
          "id": "i0",
          "text": "Arithmetic"
        },
        {
          "id": "i1",
          "text": "Comparison / Membership / Identity"
        },
        {
          "id": "i2",
          "text": "Logical"
        },
        {
          "id": "i3",
          "text": "Ordinary assignment statement"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Line 1",
          "correctItemId": "i0"
        },
        {
          "id": "z1",
          "label": "Line 2",
          "correctItemId": "i1"
        },
        {
          "id": "z2",
          "label": "Line 3",
          "correctItemId": "i2"
        },
        {
          "id": "z3",
          "label": "Line 4",
          "correctItemId": "i3"
        }
      ]
    },
    {
      "id": "png-q135",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Match each data structure with its characteristic.",
      "explanation": "A list permits indexed replacement. A set supports member insertion/removal but no positional indexing. A tuple is an immutable sequence, not a mutable list; referenced objects may themselves be mutable. A dictionary maps keys to values.",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "background_colors = [\"yellow\", \"slate\", \"lightblue\"]"
        },
        {
          "id": "i0_1",
          "text": "locations = {\"HQ\", \"West\", \"Remote1\"}"
        },
        {
          "id": "i0_2",
          "text": "departments = (\"Sales\", \"Marketing\", \"Operations\", \"IT\")"
        },
        {
          "id": "i0_3",
          "text": "offices = {\"location\": \"East\", \"size\": \"4500\"}"
        },
        {
          "id": "i1_0",
          "text": "list"
        },
        {
          "id": "i1_1",
          "text": "set"
        },
        {
          "id": "i1_2",
          "text": "tuple"
        },
        {
          "id": "i1_3",
          "text": "dict"
        },
        {
          "id": "i2_0",
          "text": "list"
        },
        {
          "id": "i2_1",
          "text": "set"
        },
        {
          "id": "i2_2",
          "text": "tuple"
        },
        {
          "id": "i2_3",
          "text": "dict"
        },
        {
          "id": "i3_0",
          "text": "list"
        },
        {
          "id": "i3_1",
          "text": "set"
        },
        {
          "id": "i3_2",
          "text": "tuple"
        },
        {
          "id": "i3_3",
          "text": "dict"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Editable indexed values",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2",
            "i0_3"
          ]
        },
        {
          "id": "z1",
          "label": "Add/remove members; no indexed item replacement",
          "correctItemId": "i1_1",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2",
            "i1_3"
          ]
        },
        {
          "id": "z2",
          "label": "Immutable sequence",
          "correctItemId": "i2_2",
          "optionIds": [
            "i2_0",
            "i2_1",
            "i2_2",
            "i2_3"
          ]
        },
        {
          "id": "z3",
          "label": "Key-value mapping",
          "correctItemId": "i3_3",
          "optionIds": [
            "i3_0",
            "i3_1",
            "i3_2",
            "i3_3"
          ]
        }
      ]
    },
    {
      "id": "png-q136",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Display the highest and lowest attendance counts.",
      "explanation": "The built-in max returns 400 and min returns 150 for this nonempty list. The other proposed names are not the corresponding Python built-ins.",
      "code": "attendance = [300, 250, 200, 400, 150, 225, 325]\nprint([1](attendance))\nprint([2](attendance))",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "max"
        },
        {
          "id": "i0_1",
          "text": "maximum"
        },
        {
          "id": "i0_2",
          "text": "most"
        },
        {
          "id": "i1_0",
          "text": "min"
        },
        {
          "id": "i1_1",
          "text": "minimum"
        },
        {
          "id": "i1_2",
          "text": "least"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "Highest",
          "correctItemId": "i0_0",
          "optionIds": [
            "i0_0",
            "i0_1",
            "i0_2"
          ]
        },
        {
          "id": "z1",
          "label": "Lowest",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1",
            "i1_2"
          ]
        }
      ]
    },
    {
      "id": "png-q137",
      "chapter": "practice-2",
      "type": "dropdown",
      "question": "Evaluate the final values after all three augmented assignments.",
      "explanation": "a += b first makes a 115; b -= c makes b 5; a %= b replaces a with 115 % 5, which is 0. Thus the final values are a=0, b=5, c=10.",
      "code": "a = 100\nb = 15\nc = 10\na += b\nb -= c\na %= b",
      "dragItems": [
        {
          "id": "i0_0",
          "text": "Yes"
        },
        {
          "id": "i0_1",
          "text": "No"
        },
        {
          "id": "i1_0",
          "text": "Yes"
        },
        {
          "id": "i1_1",
          "text": "No"
        },
        {
          "id": "i2_0",
          "text": "Yes"
        },
        {
          "id": "i2_1",
          "text": "No"
        }
      ],
      "dropZones": [
        {
          "id": "z0",
          "label": "a == 115",
          "correctItemId": "i0_1",
          "optionIds": [
            "i0_0",
            "i0_1"
          ]
        },
        {
          "id": "z1",
          "label": "b == 5",
          "correctItemId": "i1_0",
          "optionIds": [
            "i1_0",
            "i1_1"
          ]
        },
        {
          "id": "z2",
          "label": "c == 10",
          "correctItemId": "i2_0",
          "optionIds": [
            "i2_0",
            "i2_1"
          ]
        }
      ]
    },
    {
      "id": "png-l001",
      "chapter": "labs",
      "type": "lab",
      "title": "Filter List",
      "functionName": "filter_even",
      "question": "Write filter_even(numbers). Return only even integers, preserving the original order and duplicates. Do not modify the input list.",
      "starter": "def filter_even(numbers):\n    # Your code here\n    pass",
      "solution": "def filter_even(numbers):\n    return [n for n in numbers if n % 2 == 0]",
      "explanation": "Modulo 2 identifies even integers, including zero and negative even values. A new list preserves order and duplicates without modifying the input."
    },
    {
      "id": "png-l002",
      "chapter": "labs",
      "type": "lab",
      "title": "Password Check",
      "functionName": "is_valid_password",
      "question": "Write is_valid_password(pwd). Return a bool: True only when the string has at least 8 characters and contains the uppercase character A. A different uppercase letter alone is not sufficient.",
      "starter": "def is_valid_password(pwd):\n    # Your code here\n    pass",
      "solution": "def is_valid_password(pwd):\n    return len(pwd) >= 8 and 'A' in pwd",
      "explanation": "Both conditions must hold. len checks the boundary at eight characters; membership checks exactly uppercase A, not any capital letter. Return the Boolean expression rather than the strings True or False."
    },
    {
      "id": "png-l003",
      "chapter": "labs",
      "type": "lab",
      "title": "Exception Handling (Math)",
      "functionName": "safe_divide",
      "question": "Write safe_divide(a, b). Return a / b. When b is zero, return the exact string 'Error'. Use a try/except structure inside the function.",
      "starter": "def safe_divide(a, b):\n    try:\n        # Your code here\n        pass\n    except ZeroDivisionError:\n        pass",
      "solution": "def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return 'Error'",
      "explanation": "The risky division belongs in try. ZeroDivisionError is caught when the divisor is zero. A zero numerator with a nonzero divisor is valid and returns zero; it must not be mistaken for an error."
    },
    {
      "id": "png-l004",
      "chapter": "labs",
      "type": "lab",
      "title": "Lucky Dice",
      "functionName": "roll_until_six",
      "question": "Using random.randint(1, 6), write roll_until_six(). Roll until the first six and return the number of rolls, including the final six. Generate a fresh result on each iteration.",
      "starter": "import random\n\ndef roll_until_six():\n    count = 0\n    # Your code here\n    return count",
      "solution": "import random\n\ndef roll_until_six():\n    count = 0\n    while True:\n        count += 1\n        if random.randint(1, 6) == 6:\n            return count",
      "explanation": "Count every draw before testing for the stopping result, including a six on the very first draw. Deterministic test sequences replace randomness during grading so a lucky sample alone cannot establish correctness."
    },
    {
      "id": "png-l005",
      "chapter": "labs",
      "type": "lab",
      "title": "Conditional Sum",
      "functionName": "calculate_total",
      "question": "Write calculate_total(prices). Ignore negative prices. At the first zero, stop processing immediately and return the accumulated sum. If there is no zero, process the whole list.",
      "starter": "def calculate_total(prices):\n    total = 0\n    # Your code here\n    return total",
      "solution": "def calculate_total(prices):\n    total = 0\n    for price in prices:\n        if price == 0:\n            break\n        if price < 0:\n            continue\n        total += price\n    return total",
      "explanation": "Zero is a stop sentinel, not just another price to ignore. Negative values are skipped, and only positive values before the first zero contribute. An empty list or a leading zero yields zero."
    },
    {
      "id": "png-l006",
      "chapter": "labs",
      "type": "lab",
      "title": "Reverse Slicing",
      "functionName": "reverse_tail",
      "question": "Write reverse_tail(text). Return the last three characters in reverse order. The input contains at least three characters. Example: Python -> noh.",
      "starter": "def reverse_tail(text):\n    # Your code here\n    pass",
      "solution": "def reverse_tail(text):\n    return text[-3:][::-1]",
      "explanation": "The first slice selects the final three characters. The negative-step slice reverses that selection. Reversing the entire original string without limiting it would return too many characters."
    },
    {
      "id": "png-l007",
      "chapter": "labs",
      "type": "lab",
      "title": "Unit Testing",
      "functionName": "MyTest",
      "question": "Complete MyTest.test_addition so it verifies that add(2, 3) returns 5 using self.assertEqual. Keep add(x, y) and the class name MyTest. Do not call unittest.main().",
      "starter": "import unittest\n\ndef add(x, y):\n    return x + y\n\nclass MyTest(unittest.TestCase):\n    def test_addition(self):\n        # Use self.assertEqual here for add(2, 3) and 5\n        pass",
      "solution": "import unittest\n\ndef add(x, y):\n    return x + y\n\nclass MyTest(unittest.TestCase):\n    def test_addition(self):\n        self.assertEqual(add(2, 3), 5)",
      "explanation": "A useful test must pass for the correct addition and fail when the tested function returns a wrong value. The checker runs both scenarios; pass or an assertion comparing only two constants cannot validate add."
    },
    {
      "id": "png-l008",
      "chapter": "labs",
      "type": "lab",
      "title": "Simulated File Processing",
      "functionName": "write_and_read",
      "question": "Write write_and_read(). Open temp.txt for writing, write exactly Hello, close it, then open it for reading and return its entire contents. A with statement is allowed. Files exist only in the temporary Python browser filesystem.",
      "starter": "def write_and_read():\n    # Your code here\n    pass",
      "solution": "def write_and_read():\n    with open('temp.txt', 'w') as f:\n        f.write('Hello')\n    with open('temp.txt', 'r') as f:\n        return f.read()",
      "explanation": "The writing handle must be closed before reading begins. A with block closes a file automatically when its suite ends. Write mode replaces existing contents; read mode retrieves the stored string. Returning a hard-coded Hello without file operations does not meet the task."
    },
    {
      "id": "png-l009",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Zip code conversion",
      "execution": "script",
      "question": "Convert zip_code to a string, then print its data type. Keep the supplied assignment; add your code below the comments.",
      "starter": "zip_code = 84095\n# Convert zip_code to a string\n\n# Print the data type of zip_code\n",
      "solution": "zip_code = 84095\nzip_code = str(zip_code)\nprint(type(zip_code))",
      "explanation": "str converts the integer to text. type then returns str, displayed as <class 'str'>. Printing only the original number does not perform or demonstrate the conversion."
    },
    {
      "id": "png-l010",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Sales bonus",
      "execution": "script",
      "question": "Set bonus_amount to \"5% bonus\" if sales_amount is strictly greater than 30000; otherwise set it to \"no bonus\". Print bonus_amount. Keep the supplied assignment.",
      "starter": "sales_amount = 31000\n# Write your code here\n",
      "solution": "sales_amount = 31000\nif sales_amount > 30000:\n    bonus_amount = \"5% bonus\"\nelse:\n    bonus_amount = \"no bonus\"\nprint(bonus_amount)",
      "explanation": "The strict > boundary means 30000 receives no bonus, while 31000 receives the bonus message. Both branches assign the variable before it is printed."
    },
    {
      "id": "png-l011",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Print every location",
      "execution": "script",
      "question": "Print each location once, in list order. Keep the supplied initial assignments. You may use a while or for loop.",
      "starter": "locations = [\"Bali\", \"Auckland\", \"Sydney\", \"Bangkok\", \"Tokyo\"]\nlocation = 0\n# Add your code below\n",
      "solution": "locations = [\"Bali\", \"Auckland\", \"Sydney\", \"Bangkok\", \"Tokyo\"]\nlocation = 0\nwhile location < len(locations):\n    print(locations[location])\n    location += 1",
      "explanation": "Starting at index 0 includes Bali. Stop before len(locations), and increment the index to avoid an endless loop. A direct for loop over locations is also correct."
    },
    {
      "id": "png-l012",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Read list.txt",
      "execution": "script",
      "question": "Open the virtual file list.txt in read-only mode and store the file handle in content. Print all its contents. Close the handle afterward. The practice workspace supplies list.txt.",
      "starter": "# Open list.txt for reading\n\n# Display its contents\n",
      "solution": "with open(\"list.txt\", \"r\") as content:\n    print(content.read())",
      "explanation": "Mode r reads without truncation. content.read() retrieves the text and print displays it. A with context closes the resource even if the block fails. The supplied file exists only in the isolated practice workspace."
    },
    {
      "id": "png-l013",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Format the chicken count",
      "execution": "script",
      "question": "Set txt to \"We have {:<4} chickens.\" and print txt.format(chickens). The number must be left-aligned in a field of minimum width four. Keep the supplied chickens assignment.",
      "starter": "chickens = 50\n# Add your code below\n",
      "solution": "chickens = 50\ntxt = \"We have {:<4} chickens.\"\nprint(txt.format(chickens))",
      "explanation": "The < marker left-aligns the field, and 4 sets minimum width, not a maximum. For 50, the field contains two trailing padding spaces, followed by the literal space before chickens. Values longer than four characters are not truncated."
    },
    {
      "id": "png-l014",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Safe division and cleanup",
      "execution": "script",
      "question": "Use try/except/finally. Attempt to print x / y. On division by zero, print exactly \"You may have tried to divide by zero\". Always print \"Thank you for playing\" afterward. Keep the supplied assignments.",
      "starter": "x = 5\ny = 0\n# Add your code below\n",
      "solution": "x = 5\ny = 0\ntry:\n    print(x / y)\nexcept ZeroDivisionError:\n    print(\"You may have tried to divide by zero\")\nfinally:\n    print(\"Thank you for playing\")",
      "explanation": "ZeroDivisionError handles the illegal divisor. finally prints the closing message on both the successful and failing paths. Catching the specific exception avoids masking unrelated programming errors."
    },
    {
      "id": "png-l015",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Population extremes",
      "execution": "script",
      "question": "Assign the highest population to high_population and the lowest to low_population. Print high_population, then low_population, on separate lines. Keep the supplied list.",
      "starter": "population = [34000, 24000, 38000, 48000, 45000]\n# Declare and assign variables here\n\n# Print the results here\n",
      "solution": "population = [34000, 24000, 38000, 48000, 45000]\nhigh_population = max(population)\nlow_population = min(population)\nprint(high_population)\nprint(low_population)",
      "explanation": "max and min operate on the complete list, not its first/last positions. The original data yields 48000 and 24000. The exact required variable names are retained."
    },
    {
      "id": "png-l016",
      "chapter": "script-labs",
      "type": "lab",
      "title": "A module docstring",
      "execution": "script",
      "question": "Write a module docstring whose text is exactly IT Specialist - Python. Place it below the comment, as the first Python statement. Do not add a print call.",
      "starter": "# Enter the module docstring below\n",
      "solution": "# Enter the module docstring below\n\"\"\"IT Specialist - Python\"\"\"",
      "explanation": "A module docstring is a string literal that is the first statement; preceding comments do not count as statements. Triple quotes are the recommended convention. A later standalone string after another statement would not become the module docstring."
    },
    {
      "id": "png-l017",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Round upward",
      "execution": "script",
      "question": "Define number_up(number) using math.ceil and return its result. Then print number_up(x) followed by number_up(y). Keep the supplied imports and assignments. Ceiling leaves an exact integer unchanged.",
      "starter": "import math\nx = 33.4\ny = 25.7\n# Insert function here\n\n# Print the results\n",
      "solution": "import math\nx = 33.4\ny = 25.7\ndef number_up(number):\n    return math.ceil(number)\nprint(number_up(x))\nprint(number_up(y))",
      "explanation": "math.ceil rounds toward positive infinity: 33.4→34, 25.7→26 and -2.3→-2. An already integral value does not need an extra increment. The function returns an integer rather than only printing it."
    },
    {
      "id": "png-l018",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Sales tax with a default",
      "execution": "script",
      "question": "Define sales_tax(amount, tax=0.08) returning amount * tax. Then print sales_tax(100), using the default tax rate. Use the specified function and parameter names.",
      "starter": "# Write function code here\n\n# Write test code here\n",
      "solution": "def sales_tax(amount, tax=0.08):\n    return amount * tax\nprint(sales_tax(100))",
      "explanation": "The default .08 means 8%, not the multiplier 1.08. This function returns only tax, not the total including principal. sales_tax(100) is 8.0; an explicitly supplied tax argument overrides the default."
    },
    {
      "id": "png-l019",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Create a directory",
      "execution": "script",
      "question": "Create a virtual directory named Sample Files using os.mkdir. Import the required module. The isolated workspace starts without that directory.",
      "starter": "# Write your code here\n",
      "solution": "import os\nos.mkdir(\"Sample Files\")",
      "explanation": "os.mkdir creates one directory with the exact name, including the space. The lab exposes a restricted virtual filesystem; it does not create folders on the learner’s device or the production server."
    },
    {
      "id": "png-l020",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Choose a basket",
      "execution": "script",
      "question": "Select a random item from baskets with random.choice and print it. Keep the supplied baskets list. Either import style is acceptable.",
      "starter": "# Add any required import\nbaskets = [\"Wicker\", \"Picnic\", \"Gift\", \"Market\"]\n# Select and display an item\n",
      "solution": "import random\nbaskets = [\"Wicker\", \"Picnic\", \"Gift\", \"Market\"]\nprint(random.choice(baskets))",
      "explanation": "random.choice returns one member of the sequence. Printing a fixed basket is not a random selection. from random import choice is also valid; choice must still receive the supplied list."
    },
    {
      "id": "png-l021",
      "chapter": "script-labs",
      "type": "lab",
      "title": "Total financed amount",
      "execution": "script",
      "question": "Print the total financed amount, including price, licensing and a rate increase: (price + licensing) * (1 + rate). Keep the supplied assignments. This task concerns financing, not population extremes.",
      "starter": "price = 30000\nlicensing = 1000\nrate = .05\n# Write your code below\n",
      "solution": "price = 30000\nlicensing = 1000\nrate = .05\nprint((price + licensing) * (1 + rate))",
      "explanation": "Add price and licensing before applying 1 + rate. The 1 includes the principal and .05 adds 5%, producing 32550.0. Multiplication by rate alone would calculate only the increase. The mismatched population instructions in the supplied source have been corrected."
    }
  ]
};
