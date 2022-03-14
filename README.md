# UFOs
Module 11: JavaScript, Bootstrap, and UFOs

## Overview of Project
The purpose of this challenge was to update the JavaScript code and HTML file to add additional filters.  In addition to the **date** filter, the **city**, **state**, **country** and **shape** filters were added.  The additional filters allow users to search for UFO sightings using multiple criteria.


## Results
Below are the filters available that users can now use to search for UFO sightings from the available data.
- [<image src="./Results/AvailableFilters.PNG" width="200" height="200">](https://github.com/eldarias/UFOs/blob/main/Results/AvailableFilters.PNG)<b></b>


### Using Filter Search: 
Here are some examples of how users can use the filters to query for only the UFO sightings of interest:

- Example Search using Date and City where the **Date** = _January 12 2010 (1/12/2010)_ and **city** = _wichita_
    - [<image src="./Results/SearchExample01.PNG" width="800" height="600">](https://github.com/eldarias/UFOs/blob/main/Results/SearchExample01.PNG)<b></b>
- Example Search using State where the **State** = _ny_
    - [<image src="./Results/SearchExample02.PNG" width="800" height="600">](https://github.com/eldarias/UFOs/blob/main/Results/SearchExample02.PNG)<b></b>


## Summary
In summary, the new JavaScript code and HTML file accomplish the goal of allowing users to filter UFO sightings using multiple criteria, but there are improvements that can be made.
The limitations observed or recommended improvements to the **Filter Search** are as follows:
- The filters are case-sensitive therefore data will be returned only if users enter lowercase text.
- The date field does not work if 0 is entered in front of months and days, for example: January 1, 2010 must be entered as 1/1/2010, if entering 01/01/2010, it will not be recognized.
- The Filter Search can also be improved by adding multiple criteria for the same filter, for example: State = NY or State = CA.
