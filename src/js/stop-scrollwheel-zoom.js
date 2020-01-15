/**
 * This is inserted into the content to handle the scroll.
 *
 * @author Jay Beaton (http://jaybeaton.com)
 */
(function(){

  /**
   * Main stopscrollwheelzoom constructor
   */
  let SSWZ = function() {

    /**
     * Handler for scroll- control must be pressed.
     * @param e
     */
    this.keyScrollHandler = function(e) {
      if (e.ctrlKey) {
        e.preventDefault();
        return false;
      }
    }
  };

  if (window === top) {
    let sswz = new SSWZ();
    window.addEventListener('wheel', sswz.keyScrollHandler, {passive: false});
  }

})();
