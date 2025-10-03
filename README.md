# Notes for running the program
- It should be running in Firefox (during testing mode)
- If you try to run it in Chrome, apparently there is an ussue with:
``` <script type="module" ...> ```
In order to avoid that, I chose to use Firefox

** Once you press run and debug, it is possible that it will appear "file index.html not found", to solve this, just write the actuall path in the URL bar and it should fix everything **

Another issue encountered was when trying to make index.html read main.js, however that was easily solved just by changing the "src="


New update: managed to do a vite project inside