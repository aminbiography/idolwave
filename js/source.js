/* 
//////////////////////////////////////////////////////
final author start
//////////////////////////////////////////////////////
Final Author @ Mohammad Aminul Islam
//////////////////////////////////////////////////////
final author end
//////////////////////////////////////////////////////
*/
 
    
    
    //  Disable right-click context menu 
   
    document.addEventListener('contextmenu', event => event.preventDefault());
 
    // Disable F12 key and Ctrl+Shift+I combo

    document.addEventListener('keydown', event => {
        if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I") || (event.ctrlKey && event.shiftKey && event.key === "C")) {
            event.preventDefault();
        }
    });
    
 
    // Prevents text selection on the webpage by blocking the 'selectstart' event.
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
      });