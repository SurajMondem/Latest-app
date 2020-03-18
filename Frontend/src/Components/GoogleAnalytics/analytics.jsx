import ReactGA from 'react-ga';

const trackingId = "UA-161040047-1"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);


// This should be part of your setup
ReactGA.initialize('foo', { testMode: true });
// This would be in the component/js you are testing
ReactGA.ga('send', 'pageview', '/mypage');
// This would be how you check that the calls are made correctly
ReactGA.testModeAPI.calls.should.eql([
    ['create', 'foo', 'auto'],
    ['send', 'pageview', '/mypage']
]);

