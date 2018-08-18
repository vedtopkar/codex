# Electronic Lab Notebook Inspiration

Ethos:
- The application should not store ANY data outside of the PLAIN TEXT files stored in folders and the files that those files reference.
- If tomorrow the program disappeared, a regular human should be able to look at the plain text files and be able to easily read and understand all of the information (this means no data stored in JSON, databases, etc.)
- If he folder containing all the notebook's plain text files are given to another person that fires up the application, the application must read all information in and present the exact same experience
- The application should help you automatically render all files into a single lab notebook file (plus a folder of all attachments) that can be archived and/or distributed.

File structure:
- There can be multiple "notebooks", each of which is essentially a folder of days (where each day itself is a folder), these can be used for different topics (e.g. one for each experiment, another for lab meetings, another for advisor meetings)
- Every day gets its own folder named by the date
- The folder has a single markdown file for that day
- The folder will have another folder for images and attachments that are referenced by the markdown file in the day's folder (the intent is to be able to easily move around files and their attachments by hand)

Editor
- The editor will be a WYSIWYG Markdown editor
- The editor will have live previews of inserted images
- The editor will show file info for linked files
- The editor will allow for tag autocompletion when the `#` character is typed before a word

Viewer
- The viewer will always display notebook in chronological order