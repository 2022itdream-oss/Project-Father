# =========================================================================
# PROJECT-FATHER // PROJECT-FATHER-MVP
# MODULE: OPENCV OPTICAL CALIBRATION ENGINE FOR OFFLINE PAPER DIAGNOSTICS
# =========================================================================

import cv2
import numpy as np

class MVPDiagnosticVision:
    def __init__(self):
        # Operational limits for single-use cellulose colorimetric validation
        self.nozzle_diameter_mm = 0.4
        self.temp_min_bio_safe = 38.0
        self.temp_max_bio_safe = 45.0

    def normalize_lighting_and_shadows(self, raw_frame_bytes):
        """
        Takes raw image array data from a smartphone or single-board camera.
        Applies a localized illumination filter to erase shadows, shadows, 
        and ambient light skews before running colorimetric paper tracking.
        """
        # Convert byte data stream into an OpenCV usable image matrix
        np_array = np.frombuffer(raw_frame_bytes, dtype=np.uint8)
        image = cv2.imdecode(np_array, cv2.IMREAD_COLOR)
        
        if image is None:
            print("VISION EXCEPTION: Invalid image byte matrix payload.")
            return None

        # Split image into YUV color channels to separate luminescence (brightness) from chrominance (color)
        yuv_image = cv2.cvtColor(image, cv2.COLOR_BGR2YUV)
        y_channel, u_channel, v_channel = cv2.split(yuv_image)

        # Apply CLAHE (Contrast Limited Adaptive Histogram Equalization) to balance room shadows
        clahe = cv2.createCLAHE(clipLimit=3.0, tileGridSize=(8, 8))
        shadow_corrected_y = clahe.apply(y_channel)

        # Re-merge the balanced brightness channel with unaltered pure color signals
        merged_yuv = cv2.merge((shadow_corrected_y, u_channel, v_channel))
        calibrated_bgr = cv2.cvtColor(merged_yuv, cv2.COLOR_YUV2BGR)

        print("MVP OPTICAL MATRIX: Room lighting shadows stripped, colors normalized successfully.")
        return calibrated_bgr

    def match_deficiency_color(self, processed_matrix, sample_coordinates_xywh):
        """
        Audits a targeted box region on the paper lateral flow matrix to map color changes.
        Matches hex color structures to cross-reference acute nutritional metrics.
        """
        if processed_matrix is None:
            return "ERROR_INVALID_INPUT"

        x, y, w, h = sample_coordinates_xywh
        roi = processed_matrix[y:y+h, x:x+w]

        # Calculate median color value across the paper test grid to ignore surface dust or fibers
        median_bgr = np.median(roi, axis=(0, 1)).astype(int)
        
        # Format color into standard programmatic structures for tracking dictionary evaluation
        hex_color = "#{:02x}{:02x}{:02x}".format(median_bgr[2], median_bgr[1], median_bgr[0])
        print(f"MVP DIAGNOSTIC MATCH: Parsed regional hex signature -> {hex_color}")
        return hex_color

if __name__ == "__main__":
    # Internal initialization sanity check loop
    vision_engine = MVPDiagnosticVision()
