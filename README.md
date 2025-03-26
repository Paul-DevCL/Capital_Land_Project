# CRUDProject
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
      


Make sure you are on the main branch in this repo

Click on the green button with the "Code" text

Select the "Download ZIP" option and extract it locally

Now you can open your visual studios

With visual studios select "Open a project solution"

You will need to navigate to the extracted folder you just downloaded

Select the Capital_Land_Project-main folder

If you see the following 2 folders

vs
Capital_Land_Project-main 

Select Capital_Land_Project-main 

Select the CRUDProject.sln

If you encounter a problem with the hhtps,
run the following 2 commands in the Package Manager Console

dotnet dev-certs https --clean

and then 

dotnet dev-certs https --trust

this should fix any issue

Ensure that 'https' is selected next to your run icon

run the project








 
