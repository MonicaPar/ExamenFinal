# Page snapshot

```yaml
- dialog "cookieconsent":
  - text: This website uses fruit cookies to ensure you get the juiciest tracking experience.
  - button "learn more about cookies": But me wait!
  - button "dismiss cookie message": Me want it!
- button "Open Sidenav"
- button "Back to homepage":
  - img "OWASP Juice Shop"
  - text: OWASP Juice Shop
- textbox [disabled]
- button "Show/hide account menu": Account
- button "Language selection menu": EN
- heading "Customer Feedback" [level=1]
- text: Author
- textbox "Field with the name of the author" [disabled]: anonymous
- text: Comment
- textbox "Field for entering the comment or the feedback": Este sitio es excelente para pruebas automatizadas 🎯
- emphasis: Max. 160 characters
- text: 53/160 Rating
- slider: "1"
- text: "1★ CAPTCHA: What is"
- code: 1+4-8
- text: "? Result"
- textbox "Field for the result of the CAPTCHA code"
- button "Button to send the review" [disabled]: Submit
```