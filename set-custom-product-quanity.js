
//Author: STDEV
// Description:This is the custom code to set product qty by URL params

jQuery(document).ready(function ($) {
  // Get the URL of the page
  var url = window.location.href;

  // Get the quantity parameter from the URL
  var match = url.match(/[\?&]quantity=(\d+)/);
  var newQuantity = match ? parseInt(match[1]) : null;

  // Change the product quantity if the quantity parameter is found in the URL
  if (newQuantity !== null) {
      // Find the quantity input element on the product page
      var quantityInput = $('input[name="quantity"]');

      // Change the quantity value
      quantityInput.val(newQuantity);

      // Trigger the change value event to update the quantity in WooCommerce
      quantityInput.trigger('change');
  }
});