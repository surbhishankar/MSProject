Visualizing Thumbnails
======================

AN implementation based on the idea of visualizing versions of web archived pages through thumbnail representations. This work is for collections of Columbia University Libraries and New York Art Resources Consortium (NYARC). 

![timeMap] (_Image_Grid/timeMap.PNG)

###Creating JSON files

To create JSON files, store all the URI-Rs of the mementos in a .txt file. This file will be input for urlscript.py file. Give a name for the output file where the JSON content is intended to be stored. Here are some example URIs.

* `https://wayback.archive-it.org/4847/20141113224906/http://peterblumgallery.com/`
* `https://wayback.archive-it.org/1068/20140102210152/http://www.cageprisoners.com/`
* `https://wayback.archive-it.org/1068/20140328055441/http://www.cageuk.org/`

###Running python script in command-line

To run the python script, the following command needs to be executed.

```
$ python urlscript.py
```

##Viewing the Visualizations

There are three different visualization designs implemented in this project. They can be viewed at the following links.

* Atlantic Yards `http://www.cs.odu.edu/~sshankar/MS_Project/project_AtlanticYards.html`
* Brooklyn Bridge Park `http://www.cs.odu.edu/~sshankar/MS_Project/project_BrooklynBridgePark.html`
* Cage Prisoners `http://www.cs.odu.edu/~sshankar/MS_Project/project_CagePrisoners.html`
* Cofadeh `http://www.cs.odu.edu/~sshankar/MS_Project/project_Cofadeh.html`
* Gulf Labor `http://www.cs.odu.edu/~sshankar/MS_Project/project_GulfLabor.html`
* Peter Blum Gallery `http://www.cs.odu.edu/~sshankar/MS_Project/project_PeterBlumGallery.html`
