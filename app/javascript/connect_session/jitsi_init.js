$(document).on("turbolinks:load", () => {
  const domain = 'meet.jit.si';
  const rootNode = $('#screen-share');
  const options = {
    roomName: rootNode.data('roomName'),
    width: '100%',
    height: '100%',
    parentNode: rootNode[0]
  };
  const api = new JitsiMeetExternalAPI(domain, options);
  api.executeCommands({
    displayName: [rootNode.data('displayName')],
    avatarUrl: [rootNode.data('avatarUrl')],
    toggleVideo: [],
    toggleTileView: [],
    subject: ['StuckDev Help Session']
  });

  const helpRequestId = rootNode.data('helpRequestId');
  if (rootNode.data('isOwner')) {
    api.executeCommand('toggleShareScreen');
  }

  function readyToCloseListener(object) {
    console.log('Closing...');
    if (rootNode.data('isOwner')) {
      window.location.replace("http://" + window.location.host + "/help_requests/" + helpRequestId + "/follow_up")
    } else {
      window.location.replace("http://" + window.location.host + "/help_requests/" + helpRequestId + "/thanks")
    }
  }

  function participantLeftListener(object) {
    api.executeCommand('hangup');
  }

  api.addEventListener('readyToClose', readyToCloseListener);
  api.addEventListener('participantLeft', participantLeftListener);
});