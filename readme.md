#User Stories
1. **Carol**: she has a family that she loves very much, but doesn't live near.  She wants to share photos of her shitty cats, but in a fashinable layout.
2. **Kyle**: He has Zero design sense but wants to impress his mom back home with his Immsersive Class Graduation Photos.
3. **Khaleesi**: She owns a business and wants to do a presentation for local girl bosses who are also passionate about burning men alive. She'll use a SnapBook layout to capture her fond memories about not sleeping with her weird half brother.

-----------
#Minnimum Viable Product

Our MVP will be a web app that will provide a user the ability to upload images that are saved to their profile, allow them to view all images currently saved, and have users select pictures to output to a scrapbook that can be saved and accessed later. 

----------
#Routes

| Path | Verb | Purpose 
| / | GET | Serve the Home Page
| /layouts | GET | Serve page of our snapbook templates
| /login | GET | Serve the login page 
| /login | POST | Verify User Login information
| /signup | GET | Serve the signup page & form
| /signup | POST | Add user to user DB 
| /profile | GET | Display authenticated user
| /profile | PUT | To update user information
| /collections | GET |  