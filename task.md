The Task:
The existing function is (without backend development):
- Scanning a QR code displays a document.
The function should be extended by the following:
- By scanning a QR code, a small advertisement is displayed first and then the document.
Current state of technology:
- The documents are stored in a NextCloud (NC is hosted in Azure).
- The QR code refers directly to the corresponding document when called up.
Idea:
Develop a small REST web service unit that then listens to the QR code requests as a small web server supported by containers.
When a QR code is called up, a small advertisement is first played and then the actual document is called up.
