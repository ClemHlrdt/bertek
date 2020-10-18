# Bertek

This is a small front end project to demonstrate how to use Angular with data handling, components along with CSS Grid and Flexbox.

## Components

I decided to go with two components:

1. About component
1. Card component

The about component a the smart component while the card component is a presentation component. Components are styled with SCSS files in their respective directories. I also used SCSS mixins & variables to make the code DRY along with a reset and typography file.

## Services

I used a single service which fetches data from the given [URL](https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json). The response needed some processing to be used properly. I used the pipe and rxjs operators to obtain the necessary information (the title of the page & member info).

The service is called through a resolver before being passed to the about component.
