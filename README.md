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
   dotnet dev-certs https --clean
   dotnet dev-certs https --trust

  Try and run it again.
















 
