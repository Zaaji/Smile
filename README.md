# Smile
Healthy habit creating app for oral hygiene

Contributor: Nolan Pokpongkiat

This app was created with React Native for the Android.

Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.

While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

Node

Follow the installation instructions for your Linux distribution to install Node 8.3 or newer.

The React Native CLI

Node comes with npm, which lets you install the React Native command line interface.

Run the following command in a Command Prompt or shell:

npm install -g react-native-cli
If you get an error like Cannot find module 'npmlog', try installing npm directly: curl -0 -L https://npmjs.org/install.sh | sudo sh.
Java Development Kit

React Native requires a recent version of the Java SE Development Kit (JDK). Download and install Oracle JDK 8 if needed. You can also use OpenJDK 8 as an alternative.

Android development environment

Setting up your development environment can be somewhat tedious if you're new to Android development. If you're already familiar with Android development, there are a few things you may need to configure. In either case, please make sure to carefully follow the next few steps.

1. Install Android Studio

Download and install Android Studio. Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:

Android SDK
Android SDK Platform
Android Virtual Device
Then, click "Next" to install all of these components.

If the checkboxes are grayed out, you will have a chance to install these components later on.
Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

2. Install the Android SDK

Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 8.1 (Oreo) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.

The SDK Manager can be accessed from the "Welcome to Android Studio" screen. Click on "Configure", then select "SDK Manager".

The SDK Manager can also be found within the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 8.1 (Oreo) entry, then make sure the following items are checked:

Android SDK Platform 27
Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image
Next, select the "SDK Tools" tab and check the box next to "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 27.0.3 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

3. Configure the ANDROID_HOME environment variable

The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your $HOME/.bash_profile config file:

export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=$PATH:$ANDROID_HOME/platform-tools
.bash_profile is specific to bash. If you're using another shell, you will need to edit the appropriate shell-specific config file.
Type source $HOME/.bash_profile to load the config into your current shell. Verify that ANDROID_HOME has been added to your path by running echo $PATH.

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Preferences" dialog, under Appearance & Behavior → System Settings → Android SDK.
Watchman

Follow the Watchman installation guide to compile and install Watchman from source.

Watchman is a tool by Facebook for watching changes in the filesystem. It is highly recommended you install it for better performance and increased compatibility in certain edge cases (translation: you may be able to get by without installing this, but your mileage may vary; installing this now may save you from a headache later).


Once the dependecies are installed, clone the repository set up the Developer Mode in order to run the app on an Android device over USB.

Configure on-device developer options

The Settings app on Android includes a screen called Developer options that lets you configure system behaviors that help you profile and debug your app performance. For example, you can enable debugging over USB, capture a bug report, enable visual feedback for taps, flash window surfaces when they update, use the GPU for 2D graphics rendering, and more.

Note: The list of developer options can vary between Android versions.

Enable developer options and debugging

On Android 4.1 and lower, the Developer options screen is available by default. On Android 4.2 and higher, you must enable this screen as follows:

Open the Settings app.
(Only on Android 8.0 or higher) Select System.
Scroll to the bottom and select About phone.
Scroll to the bottom and tap Build number 7 times.
Return to the previous screen to find Developer options near the bottom.
At the top of the Developer options screen, you can toggle the options on and off (figure 1). You probably want to keep this on. When off, most options are disabled except those that don't require communication between the device and your development computer.

Next, you should scroll down a little and enable USB debugging. This allows Android Studio and other SDK tools to recognize your device when connected via USB, so you can use the debugger and other tools.

You can now run the following commands to run the app on your Android device:

cd 2XDay
react-native run-android

Troubleshooting

If after running the commands, you recievce the error Unable to load script from assets... you may be running an older version of Android not compatible with the code.

ctrl+c will allow you kill the process.
If you have a problem with device permission run:

adb devices 

to seer if the device is properly connected. If you see a name and the word device after, it is properly connected. If you don't see the word devices, go to the developer mode menu and select revoke USB debuggin authorization, disconnect the cable and reconnect the cable. Run the app again and give permission to debug.

You may need to restart the adb server, and if so run the following commands:

adb kill-server
adb start-server


