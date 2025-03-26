# CRUDProject

RUN
 Steps for running this locally: 

  1. Go to this website - 
     https://visualstudio.microsoft.com/vs/

  2. Hover over "Download Visual Studios".
 
  3. From the dropdown select "Community 2022".

  4. After the installer as been downloaded run it and you will be taken to the workloads tab.

  5. Select 
     ASP.NET and web development
     .NET desktop development

  6. Click install

  After this is finished you will also need to install .NET 8 as that's what I used for this project.

  7. Go to this website - 
     https://dotnet.microsoft.com/en-us/download

  8. Click on the .NET 8.0's "Download .NET SDK x64".

  9. After the download has been completed, run the .exe and select install

  10. Go to this Github link - 
      https://github.com/Paul-DevCL/Capital_Land_Project

  11. Make sure you are on the main branch in this repo.

  12. Click on the green button with the "Code" text.

  13. Select the "Download ZIP" option and extract it locally.

  14. Now you can open your visual studios.

  15. With visual studios open, select "Open a project solution".

  16. You will need to navigate to the extracted folder you just downloaded.

  17. Select the Capital_Land_Project-main folder

  18. If you see the following 2 folders
      vs
      Capital_Land_Project-main 

  Select Capital_Land_Project-main 

  19. Select the CRUDProject.sln.

  20. Ensure that 'https' is selected next to your run icon in Visual Studios.

  21. Run the project.

  If you encounter any issues regarding the https certificate not being trusted, do the following : 

  Run these 2 commands 1 by 1 in your Package Manager Console - 
   1. dotnet dev-certs https --clean
   2. dotnet dev-certs https --trust

  Try and run the program again.

TESTING
To test this application, you will see that there will be a few rows of data in the table already.

You can start by either deleting each one of them individually by clicking on the bin icon in the Actions column or just continue with the data already there.

Click on the Add Product button and you will see the modal open. Here you can enter a new product's name , description and price.

Name and Description cannot be empty.
Price cannot be 0 or empty. 

After entering the info , press the Add Product button.

If all validation is successful, the modal will close and the table will contain the newly created record along with any other previous records.

If validation was not successful, the user will receive a clear indication of where the issue is.

The user can also click on any product name in the table. This will open a modal where the details are prepopulated so the user can see exactly what the current details are of that product.
The user can then choose to change a value, then press on the Update Product button , the modal will close and the change will be reflected in the table.

I also added a message in the table that will alert the user to there being no products if the db is empty. 

















 
