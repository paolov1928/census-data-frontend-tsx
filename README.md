
# census-data-frontend-tsx


This is the frontend for querying the census data RDS. It uses typescript, redux and react. A combination of front end react libraries are used including: Redux-Thunk, Axios, Material UI, Styled Components.

The structure of this application is a dropdown component updates a redux store. This redux store uses the node API to look up the relevant data in the Amazon RDS. The data that is then received from the node API is displayed as a table.

To run

- Clone github repository
- NPM install
- NPM start
