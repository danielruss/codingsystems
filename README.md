# codingsystems
A repository of coding system data.  

coding system | format | URL | Notes 
------------ | ------------- | ------------- | ----------
US SOC 2010   | json          | [https://danielruss.github.io/codingsystems/soc_2010_complete.json](https://danielruss.github.io/codingsystems/soc_2010_complete.json) | The complete Codings system.  The object has two element, first: a list of codes (key:codes), second: a tree structure containing all the codes (key:tree)
 &nbsp;       | json         | [https://danielruss.github.io/codingsystems/soc_2010_6digit.json](https://danielruss.github.io/codingsystems/soc_2010_6digit.json) | An array of all the 6 digit soc 2010 codes
  &nbsp;       | csv          | [https://danielruss.github.io/codingsystems/soc_2010_6digit.csv](https://danielruss.github.io/codingsystems/soc_2010_6digit.csv) | csv made from onet db_24_2 Occupational table
 &nbsp;       | xml          | [https://danielruss.github.io/codingsystems/soc2010.xml](https://danielruss.github.io/codingsystems/soc2010.xml) | Original file made by hand years ago.  Let me know if you find any errors.
US SIC 1987   | json          | [https://danielruss.github.io/codingsystems/sic_1987.json ](https://danielruss.github.io/codingsystems/sic_1987.json) |
 &nbsp;       |  csv          | [https://danielruss.github.io/codingsystems/sic_1987.csv](https://danielruss.github.io/codingsystems/sic_1987.csv)  |
CA NOC 2011   | json          |[ https://danielruss.github.io/codingsystems/noc_2011.json ](https://danielruss.github.io/codingsystems/noc_2011.json) |
 &nbsp;       |  csv          | [https://danielruss.github.io/codingsystems/noc_2011_4d.csv](https://danielruss.github.io/codingsystems/noc_2011_4d.csv) | The original file (noc-cnp-2011-structure-eng.csv) from statistic Canada had latin1 encoding, I changed this to UTF-8
NAICS 2017    | json          | [ https://danielruss.github.io/codingsystems/naics_2017_4digit.json ](https://danielruss.github.io/codingsystems/naics_2017_4digit.json) | Four digit NAICS 2017 codes |

Thank you to the organization the actually provide the data:
* The US SOC and SIC data came from the U.S. Bureau of Labor Statistics and [O\*Net](https://www.onetcenter.org/db_releases.html) DB version 24.3
* The Canadian NOC Data came from [Statistics Canada](https://www.statcan.gc.ca/eng/subjects/standard/noc/2011/index)


If you would like to make a contribution, I'm happy to add your coding system and credit you in the notes.
