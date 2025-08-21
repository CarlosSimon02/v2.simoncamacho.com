import type { ContactFormData } from "./validations";

/**
 * Mock function to simulate a network request for form submission
 * Resolves after 2 seconds, randomly rejects for demonstration
 */
export async function submitContactForm(data: ContactFormData): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly reject 30% of the time for demonstration
      if (Math.random() < 0.3) {
        reject(
          new Error("Network error: Failed to send message. Please try again.")
        );
      } else {
        console.log("Form submitted successfully:", data);
        resolve();
      }
    }, 2000);
  });
}
