<!-- custom component rendering -->

Formio.use({
components: SurveyCustComponent.happinessSurveyComponents,
templates: SurveyCustComponent.happinessSurveyTemplates
});
Formio.use({
components: SurveyCustComponent.starRatingComponents,
templates: SurveyCustComponent.starRatingTemplates
});

<!-- html -->
<!-- header -->
<link rel="stylesheet" href="https://unpkg.com/formiojs@latest/dist/formio.full.min.css">
<script src="https://unpkg.com/formiojs@latest/dist/formio.full.min.js"></script>
<script src="~/Scripts/libs/assets/formio/survey-cust-component.js" type="text/javascript"></script>

<div class="container">
    <div class="row">
        <div class="col-12">
            <div id='formio'></div>
        </div>
    </div>
</div>

<!-- Create app -->

function renderSurveyForm(data) {
Formio.createForm(document.getElementById('formio'), data, { breadcrumbSettings: { clickable: false }, buttonSettings: { showCancel: false } }).then(function (form) {
if (document.getElementsByTagName('nav') && document.getElementsByTagName('nav').length > 0) {
document.getElementsByTagName('nav')[0].style.display = 'none'; //this is a temporary fix. this is one issue in formio
}
if (document.getElementsByClassName('btn-wizard-nav-cancel') && document.getElementsByClassName('btn-wizard-nav-cancel').length > 0) {
document.getElementsByClassName('btn-wizard-nav-cancel')[0].parentElement.style.display = 'none';//this is a temporary fix. this is one issue in formio
}
if (document.querySelector('[id^="error-list-"]') && document.querySelector('[id^="error-list-"]').id) {
document.querySelector('[id^="error-list-"]').id.style.display = 'none';
}

        // Defaults are provided as follows. first Name and lasName are component key
        // please refer example json in this link ---> https://examples.form.io/example
        form.submission = {
            //data: {
            //    firstName: 'Joe',
            //    lastName: 'Smith'
            //}
        };

        // Register for the submit event to get the completed submission.
        form.on('submit', function (submission) {
            console.log('Submission was made!', submission);
            //send back data to parent frame
            let formioSubmitData = {
                event: 'formioSubmit',
                submissiondata: submission
            };
            let formioSubmitDataObj = JSON.stringify(formioSubmitData);
            window.top.postMessage(formioSubmitDataObj, "*");
            //window.top.postMessage(formioSubmitDataObj, location.origin);
        });

        // Everytime the form changes, this will fire.
        form.on('change', function (changed) {
            console.log('Form was changed', changed);
        });
    });

}
