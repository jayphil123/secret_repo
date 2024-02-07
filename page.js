// JS for Valentine's website

$(document).ready(function () {
    const $yesButton = $('#yesButton');
    const $question = $('.question');
    const $congrats = $('.congratulations');
    const $noButton = $('#noButton');

    const noPrompts = ["Are you sure?", "Have you thought this through?", 
    "Fr?", "Are you positive?"];

    $yesButton.on('click', function () {
        $question.hide();
        $yesButton.hide();
        $noButton.hide();
        $congrats.show();
    });

    $noButton.on('click', function () {
        const randomPrompt = noPrompts[Math.floor(Math.random() * noPrompts.length)];
        $noButton.text(randomPrompt);
        const yesFont = parseFloat($yesButton.css('font-size')) + 1;
        const noFont = parseFloat($noButton.css('font-size')) - 1;
        console.log(noFont)

        $yesButton.css('font-size', yesFont + 'px');
        $noButton.css('font-size', noFont + 'px');
    });
});