# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Your project description goes here. What problem did you solve? How did you solve it?

Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).

## Plan

# getting ready
[ ] Look over existing code
    [ ] test in postman
[X] add images to public/images
    [ ] create image objects: id (unique), title, description, path
[X] keep data in database
    [X] name your database `react_gallery`
    [X] `database.sql` to document db tables
[X] install nodemon
[X] npm install

# base mode
[ ] create gallery page
[ ] components:
    [ ] App
        [ ] axios to GET data
    [ ] GalleryList
        [ ] import to App
        [ ] pass in data
        [ ] iterate over data, creating gallery items
    [ ] GalleryItem
        [ ] import to GalleryList
        [ ] pass in data for individual items
        [ ] display pictures
            [ ] same dimensions on each
        [ ] on click, toggle to a description
        [ ] display "like" count
        [ ] like button
            [ ] increment like count
            [ ] axios to PUT updatedlike count
            [ ] update DOM
# stretch
[ ] separate branch for each feature
    [ ] merge it into master with `git merge --no-ff`
[ ] form that allows user to post a new item
    [ ] client side 
    [ ] server side route
[ ] ability to delete gallery item
[ ] add styling with Material-UI [https://material-ui.com/](https://material-ui.com/)
[ ] uppy for image upload [uppy](https://uppy.io/)