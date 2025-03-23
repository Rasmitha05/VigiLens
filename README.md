# VigiLens

VigiLens is an Intruder Detection System powered by Convolutional Neural Network (CNN)-based object detection. It enhances security by identifying unauthorized intrusions using advanced image processing techniques.

## 🌟 Features

- **Real-Time Intruder Detection:** Utilizes CNN-based object detection to identify intruders in real-time.
- **Email Notifications:** Sends immediate alerts via email upon detecting unauthorized access.
- **Known Faces Recognition:** Differentiates between authorized personnel and intruders by recognizing known faces.
- **Image Logging:** Captures and stores images of detected intrusions for record-keeping and analysis.

## 🛠️ Tech Stack

- **Frontend:** JavaScript, HTML, CSS
- **Backend:** Python
- **Machine Learning:** CNN-based object detection models
- **Libraries & Tools:** OpenCV, face_recognition, smtplib (for email notifications)

## 🚀 Installation

To set up VigiLens on your local machine, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Rasmitha05/VigiLens.git
2. Navigate to the project directory:
   cd VigiLens
3. Install the required Python packages:
   pip install -r requirements.txt
4. Run the application:
   python live_cam.py
📌 Usage
Start the System: Run live_cam.py to initiate the live camera feed.

Monitor Feed: The system will continuously monitor for intrusions.

Receive Alerts: Upon detecting an intruder, the system will:

Capture an image of the intruder.

Send an email notification with the captured image to the specified address.

Review Logs: All captured images are stored in the frames directory for further analysis.
