export default function YourForm() {
  return (
    <>
      <form id="wd-your-form">
        <h5>Your Form</h5>
        <label htmlFor="wd-your-form-first-name">First name:</label>
        <input type="text" placeholder="Shankul" id="wd-your-form-first-name" />
        <br />
        <label htmlFor="wd-your-form-last-name">Last name:</label>
        <input type="text" placeholder="Upadhyay" id="wd-your-form-last-name" />
        <br />
        <label htmlFor="wd-your-form-password">Password:</label>
        <input type="password" id="wd-your-form-password" />
        <br />
        <textarea
          id="wd-your-form-textarea"
          cols={30}
          rows={10}
          defaultValue="I am taking this course to learn more about web development and polish my CSS/styling skills. The course also teaches us about AI, next.js, and other new technologies that I have been meaning to learn more about."
        />
        <br />
        <label>Class standing:</label>
        <br />
        <input type="radio" name="wd-your-form-standing" id="wd-your-form-freshman" />
        <label htmlFor="wd-your-form-freshman">Freshman</label>
        <br />
        <input type="radio" name="wd-your-form-standing" id="wd-your-form-sophomore" />
        <label htmlFor="wd-your-form-sophomore">Sophomore</label>
        <br />
        <input type="radio" name="wd-your-form-standing" id="wd-your-form-junior" />
        <label htmlFor="wd-your-form-junior">Junior</label>
        <br />
        <input type="radio" name="wd-your-form-standing" id="wd-your-form-senior" />
        <label htmlFor="wd-your-form-senior">Senior</label>
        <br />
        <input type="radio" name="wd-your-form-standing" id="wd-your-form-graduate" />
        <label htmlFor="wd-your-form-graduate">Graduate</label>
        <br />
        <label>Enrollment status:</label>
        <br />
        <input type="radio" name="wd-your-form-enrollment" id="wd-your-form-full-time" />
        <label htmlFor="wd-your-form-full-time">Full-time</label>
        <br />
        <input type="radio" name="wd-your-form-enrollment" id="wd-your-form-part-time" />
        <label htmlFor="wd-your-form-part-time">Part-time</label>
        <br />
        <label>Interests:</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-your-form-java" />
        <label htmlFor="wd-your-form-java">Java</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-your-form-python" />
        <label htmlFor="wd-your-form-python">Python</label>
        <br />
        <input type="checkbox" name="check-interests" id="wd-your-form-webdev" />    
        <label htmlFor="wd-your-form-webdev">Web Development</label>
        <br />
        <label htmlFor="wd-your-form-major">Major: </label>
        <br />
        <select id="wd-your-form-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="CYBERSEC">Cybersecurity</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="DS">Data Science</option>
        </select>
        <br />
        <label htmlFor="wd-your-form-topics">Topics: </label>
        <br />
        <select multiple id="wd-your-form-topics" defaultValue={["JAVA", "WEBDEV"]}>
          <option value="JAVA">Java</option>
          <option value="PYTHON">Python</option>
          <option value="WEBDEV">Web Development</option>
          <option value="GAMEDEV">Game Development</option>
        </select>
        <br />
        <label htmlFor="wd-your-email">Email:</label>
        <br />
        <input type="email" placeholder="upadhyay.sha@northeastern.edu" id="wd-your-email" />
        <br />
        <label htmlFor="wd-your-grad-year">Graduation Year: </label>
        <input
            type="number"
            defaultValue="2028"
            placeholder="2028"
            min={2026}
            max={2031}
            id="wd-your-grad-year"
        />
        <br />
        <label htmlFor="wd-your-dob">Date of birth: </label>
        <input
            type="date"
            defaultValue="2003-09-08"
            min="1930-01-01"
            max="2014-12-31"
            id="wd-your-dob"
        />
        <br />
        <label>Buttons</label>
        <br />
        <button id="wd-your-form-button-save" type="submit">Save</button>
        <button id="wd-your-form-button-cancel" type="button">Cancel</button>
      </form>
    </>
  );
}
