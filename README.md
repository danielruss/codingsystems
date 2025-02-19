# codingsystems
A repository of coding system data.  

## Occupational Coding Systems

I am attempting to standardize the format that I use for the coding systems.   The format I am currently using is based off the way Statistics Canada formats noc2011.  I always
have up to the heirachical structure, but it may have additional information like:

code | title | Level | Heirarchical_structure | parent | soc2d | soc3d | soc5d | soc6d |
-----|-------|-------|------------------------|--------|-------|-------|-------|-------|
11-0000|Management Occupations|2|Major Group| NA | 11-0000 | NA | NA | NA |
11-1011|Chief Executives|6|Detailed Occupation|11-1010|11-0000|11-1000|11-1010|11-1011|

Here is an table of coding system in the standard format:

coding system | link | notes |
------------ | ------------- |---|
US SOC | |
SOC 2010   | [csv](https://danielruss.github.io/codingsystems/soc2010_all.csv) |
SOC 2000   | [csv](https://danielruss.github.io/codingsystems/soc2000_all.csv) |
SOC 2018   | [csv](https://danielruss.github.io/codingsystems/soc2018_all.csv) |
SOC 1980   | [csv](https://danielruss.github.io/codingsystems/soc1980_all.csv) | be careful the most detailed level is not always the 4-digit unit level, this list contains the official codes, and does not extend codes with zeros |
SOC 1980 most detailed | [csv](https://danielruss.github.io/codingsystems/soc1980_most_detailed.csv) | only the most detailed level. this list contains the official codes, and does not extend codes with zeros |
CA NOC ||
noc-s 2006 | [csv](https://danielruss.github.io/codingsystems/nocs2006_all.csv) [json](https://danielruss.github.io/codingsystems/nocs2006_all.json)|
noc 2006   | [csv](https://danielruss.github.io/codingsystems/noc2006_all.csv) [json](https://danielruss.github.io/codingsystems/noc2006_all.json)|
noc 2011   | [csv](https://danielruss.github.io/codingsystems/noc2011_all.csv) |
ISCO 1988  | [csv](https://danielruss.github.io/codingsystems/isco1988_all.csv) | 


## Industrial Coding Systems

coding system | links
------------ | ------------- | 
US SIC 1987   | [csv](https://danielruss.github.io/codingsystems/sic1987_all.csv) [json](https://danielruss.github.io/codingsystems/sic1987_all.csv.json)|
NAICS 2017    | [csv](https://danielruss.github.io/codingsystems/naics2017_all.csv) [json](https://danielruss.github.io/codingsystems/naics2017_all.csv.json)|
NAICS 2022    | [csv](https://danielruss.github.io/codingsystems/naics2022_all.csv) [json](https://danielruss.github.io/codingsystems/naics2022_all.csv.json)|

Thank you to the organization the actually provide the data:
* The US SOC and SIC data came from the U.S. Bureau of Labor Statistics and [O\*Net](https://www.onetcenter.org/db_releases.html) DB version 24.3
* The Canadian NOC Data came from Statistics Canada and Employment and Social Development Canada [NOC2006](https://noc.esdc.gc.ca/) [NOC 2011](https://www.statcan.gc.ca/eng/subjects/standard/noc/2011/index) and [NOC 2016](https://www.statcan.gc.ca/en/subjects/standard/noc/2016/indexV1.3)

# crosswalk
I am also in the process of standardizing the crosswalks.  The format is currently only csv, and
the format is `<original_coding_system>,<original_coding_system>_title,<xw_coding_system>,<xw_coding_system>_title`.  Here is an example:
```
soc2000,soc2000_title,soc2010,soc2010_title
11-1011,Chief Executives,11-1011,Chief Executives
11-1021,General and Operations Managers,11-1021,General and Operations Managers
```


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
