Detects whether the website is being opened in a mobile device or a desktop.

Using regex to test the navigator.userAgent property to figure out if the device is a mobile or desktop.

const detectDeviceType = () => /Android/webOS/iPhone/iPad/iPod/Blackberry/IEMobile/Opera Mini/i
                            .test(navigator.userAgent) ? "Mobile" : "Desktop";

// Exp.
  
  detectDeviceType();
