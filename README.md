# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## Plan

# getting ready
[X] Look over existing code
    [X] test in postman
[X] add images to public/images
    [X] create image objects: id (unique), title, description, path
[X] keep data in database
    [X] name your database `react_gallery`
    [X] `database.sql` to document db tables
[X] install nodemon
[X] npm install

# base mode
[X] create gallery page
[X] components:
    [X] App
        [X] axios to GET data
    [X] GalleryList
        [X] import to App
        [X] pass in data
        [X] iterate over data, creating gallery items
    [X] GalleryItem
        [X] import to GalleryList
        [X] pass in data for individual items
        [X] display pictures
            [X] same dimensions on each
        [X] on click, toggle to a description
        [X] display "like" count
        [X] like button
            [X] increment like count
            [X] axios to PUT updatedlike count
            [X] update DOM
# stretch
[ ] separate branch for each feature
    [ ] merge it into master with `git merge --no-ff`
[X] form that allows user to post a new item
    [X] client side 
    [X] server side route
    [too complicated] image upload??
[X] ability to delete gallery item
[ ] add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)
[ ] uppy for image upload [uppy](https://uppy.io/)