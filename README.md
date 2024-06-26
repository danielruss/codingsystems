# codingsystems
A repository of coding system data.  

## Occupational Coding Systems

coding system | format | URL | Notes |
------------ | ------------- | ------------- | ---------- |
US SOC 2010   | json          | [https://danielruss.github.io/codingsystems/soc_2010_complete.json](https://danielruss.github.io/codingsystems/soc_2010_complete.json) | The complete Codings system.  The object has two element, first: a list of codes (key:codes), second: a tree structure containing all the codes (key:tree) |
&nbsp;      | csv          | [https://danielruss.github.io/codingsystems/soc2010_complete.csv](https://danielruss.github.io/codingsystems/soc2010_complete.csv) | all soc 2010 codes in csv format |
 &nbsp;       | json         | [https://danielruss.github.io/codingsystems/soc_2010_6digit.json](https://danielruss.github.io/codingsystems/soc_2010_6digit.json) | An array of all the 6 digit soc 2010 codes |
&nbsp;      | csv          | [https://danielruss.github.io/codingsystems/soc2010_6digit.csv](https://danielruss.github.io/codingsystems/soc2010_6digit.csv) | csv made from  U.S. Bureau of Labor Statistic Data soc2010 structure |
&nbsp;      | csv          | [https://danielruss.github.io/codingsystems/soc2010_5digit.csv](https://danielruss.github.io/codingsystems/soc2010_5digit.csv) | csv made from  U.S. Bureau of Labor Statistic Data soc2010 structure |
&nbsp;      | csv          | [https://danielruss.github.io/codingsystems/soc2010_3digit.csv](https://danielruss.github.io/codingsystems/soc2010_3digit.csv) | csv made from  U.S. Bureau of Labor Statistic Data soc2010 structure |
&nbsp;      | csv          | [https://danielruss.github.io/codingsystems/soc2010_2digit.csv](https://danielruss.github.io/codingsystems/soc2010_2digit.csv) | csv made from  U.S. Bureau of Labor Statistic Data soc2010 structure |
 &nbsp;       | xml          | [https://danielruss.github.io/codingsystems/soc2010.xml](https://danielruss.github.io/codingsystems/soc2010.xml) | Original file made by hand years ago.  Let me know if you find any errors. |
US SOC 2018   | csv          | [https://danielruss.github.io/codingsystems/soc_2018_6digit.csv](https://danielruss.github.io/codingsystems/soc_2018_6digit.csv) | csv made from U.S. Bureau of Labor Statistic Data soc2018 structure |
US SOC 2000   | csv          | [https://danielruss.github.io/codingsystems/soc2000.csv](https://danielruss.github.io/codingsystems/soc2000.csv) | csv made from U.S. Bureau of Labor Statistic Data soc2000 structure |
US SOC 1998   | csv          | [https://danielruss.github.io/codingsystems/soc1998.csv](https://danielruss.github.io/codingsystems/soc1998.csv) | from  Revising the Standard Occupational Classification System  US Bureau of Labor Statistics, Report 929, June 1999|
US SOC 1980   | csv          | [https://danielruss.github.io/codingsystems/soc1980.csv](https://danielruss.github.io/codingsystems/soc1980.csv) | Made by hand years ago Let me know if you find any errors.  All levels|
 &nbsp;        | csv          | [https://danielruss.github.io/codingsystems/soc1980_most_detailed.csv](https://danielruss.github.io/codingsystems/soc1980_most_detailed.csv) | The most detailed code for SOC 1980 is not always a 4-digit unit code.  This is a list of the most detailed codes (AKA leaf, or does not have child nodes)|
CA NOC 2011   | json          |[ https://danielruss.github.io/codingsystems/noc_2011.json ](https://danielruss.github.io/codingsystems/noc_2011.json) |
 &nbsp;       |  csv          | [https://danielruss.github.io/codingsystems/noc_2011_4d.csv](https://danielruss.github.io/codingsystems/noc_2011_4d.csv) | The original file (noc-cnp-2011-structure-eng.csv) from statistic Canada had latin1 encoding, I changed this to UTF-8 |
CA NOC 2016   | csv          |[ https://danielruss.github.io/codingsystems/noc2016.csv ](https://danielruss.github.io/codingsystems/noc2016.csv) |

## Industrial Coding Systems

coding system | format | URL | Notes |
------------ | ------------- | ------------- | ---------- |
US SIC 1987   | json          | [https://danielruss.github.io/codingsystems/sic_1987.json ](https://danielruss.github.io/codingsystems/sic_1987.json) |
 &nbsp;       |  csv          | [https://danielruss.github.io/codingsystems/sic_1987.csv](https://danielruss.github.io/codingsystems/sic_1987.csv)  |
NAICS 2017    | json          | [ https://danielruss.github.io/codingsystems/naics_2017_4digit.json ](https://danielruss.github.io/codingsystems/naics_2017_4digit.json) | Four digit NAICS 2017 codes |

Thank you to the organization the actually provide the data:
* The US SOC and SIC data came from the U.S. Bureau of Labor Statistics and [O\*Net](https://www.onetcenter.org/db_releases.html) DB version 24.3
* The Canadian NOC Data came from Statistics Canada [NOC 2011](https://www.statcan.gc.ca/eng/subjects/standard/noc/2011/index) and [NOC 2016](https://www.statcan.gc.ca/en/subjects/standard/noc/2016/indexV1.3)

# crosswalk

|inital system | final system | format | URL | Notes |
|------------- | ------------ | ------ | ---- | ----- |
| isco 2008    | CA NOC 2011  | CSV    | [https://danielruss.github.io/codingsystems/isco2008_noc2011.csv](https://danielruss.github.io/codingsystems/isco2008_noc2011.csv) |
| isco 2008    | US SOC 2010  | CSV    | [https://danielruss.github.io/codingsystems/isco2008_soc2010.csv](https://danielruss.github.io/codingsystems/isco2008_soc2010.csv) |
| CA NOC 2011  | isco 2008    | CSV    | [https://danielruss.github.io/codingsystems/noc2011_isco2008.csv](https://danielruss.github.io/codingsystems/noc2011_isco2008.csv) |
| US SOC 2010  | isco 2008    | CSV    | [https://danielruss.github.io/codingsystems/soc2010_isco2008.csv](https://danielruss.github.io/codingsystems/soc2010_isco2008.csv) |
| CA NOC 2016  | US SOC 2018  | CSV    | [https://danielruss.github.io/codingsystems/noc2016_soc2018.csv](https://danielruss.github.io/codingsystems/noc2016_soc2018.csv) |
| US Census 1980 | US SOC 1980  | CSV    | [https://danielruss.github.io/codingsystems/occ1980_soc1980.csv](https://danielruss.github.io/codingsystems/occ1980_soc1980.csv) |
| US SOC 1980 | US SOC 2000  | CSV    | [https://danielruss.github.io/codingsystems/soc1980_soc2000.csv](https://danielruss.github.io/codingsystems/soc1980_soc2000.csv) |
| US SOC 2000 | US SOC 2010  | CSV    | [https://danielruss.github.io/codingsystems/soc2000_soc2010.csv](https://danielruss.github.io/codingsystems/soc2000_soc2010.csv) |



# 2-stage crosswalk

| inital system | final system | using      | format | URL | Notes |
------------- | ------------ | ---------- | ------ | ---- | ----- |
| US SOC 1980   | US SOC 2010  |  US SOC 2000 | CSV    | [https://danielruss.github.io/codingsystems/soc1980_soc2010.csv](https://danielruss.github.io/codingsystems/soc1980_soc2010.csv) |
| US SOC 2010   | CA NOC 2011  |  isco 2008 | CSV    | [https://danielruss.github.io/codingsystems/soc2010_noc2011_via_isco2008.csv](https://danielruss.github.io/codingsystems/soc2010_noc2011_via_isco2008.csv) |
| US SOC 2010   | CA NOC 2011  |  US SOC 2018 | CSV    | [https://danielruss.github.io/codingsystems/soc2010_noc2011_via_soc2018.csv](https://danielruss.github.io/codingsystems/soc2010_noc2011_via_soc2018.csv) |
| CA NOC 2011   | US SOC 2010  |  isco 2008 | CSV    | [https://danielruss.github.io/codingsystems/noc2011_soc2010_via_isco2008.csv](https://danielruss.github.io/codingsystems/noc2011_soc2010_via_isco2008.csv) |
| CA NOC 2011   | US SOC 2010  |  US SOC 2018 | CSV    | [https://danielruss.github.io/codingsystems/noc2011_soc2010_via_soc2018.csv](https://danielruss.github.io/codingsystems/noc2011_soc2010_via_soc2018.csv) |
| ISCO 1988   | US SOC 2010  |  ISCO 2008 | CSV    | [https://danielruss.github.io/codingsystems/isco1988_soc2010.csv](https://danielruss.github.io/codingsystems/isco1988_soc2010.csv) |

# n-stage crosswalk
| inital system | final system | using      | format | URL | Notes |
|------------- | ------------ | ---------- | ------ | ---- | ----- |
| US Census 1980    | US SOC 2010   |  US SOC 1980, US SOC 2000 | CSV    | [https://danielruss.github.io/codingsystems/occ1980_soc2010.csv](https://danielruss.github.io/codingsystems/occ1980_soc2010.csv) |


If you would like to make a contribution, I'm happy to add your coding system and credit you in the notes.
