import 'select2';
import 'select2/dist/css/select2.css';

$(document).on("turbolinks:load", () => {
  $('.js-select2').select2()
});

import 'serviceworker-companion.js.erb';
import '../components/HelpRequestsList';