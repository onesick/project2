function ready(){
  $('.purchase_date').datepicker({dateFormat: 'yy-mm-dd'});
  $('.scheduled_date').datepicker({dateFormat: 'yy-mm-dd'});
};

$(document).ready(ready);
$(document).on('page:load', ready);
