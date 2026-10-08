import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string; aid: string }>;
}) {
  const { cid } = await params;
  const listHref = `/courses/${cid}/assignments`;

  return (
    <div id="wd-assignments-editor" className="wd-form">
      <div>
        <label htmlFor="wd-name" className="wd-form-label">Assignment Name</label>
        <input id="wd-name" className="wd-form-field" defaultValue="A1 - ENV + HTML" />
      </div>

      <div>
        <label htmlFor="wd-description" className="wd-form-label">Description</label>
        <textarea
          id="wd-description"
          rows={5}
          className="wd-form-field"
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel."
        />
      </div>

      <div className="wd-form-grid">
        <label htmlFor="wd-points" className="wd-form-grid-label">Points</label>
        <input id="wd-points" type="number" className="wd-form-field wd-form-field-sm" defaultValue={100} />

        <label htmlFor="wd-group" className="wd-form-grid-label">Assignment Group</label>
        <select id="wd-group" className="wd-form-field" defaultValue="ASSIGNMENTS">
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
          <option value="PROJECTS">Projects</option>
        </select>

        <label htmlFor="wd-display-grade-as" className="wd-form-grid-label">Display Grade As</label>
        <select id="wd-display-grade-as" className="wd-form-field" defaultValue="PERCENTAGE">
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="COMPLETE">Complete/Incomplete</option>
          <option value="LETTER">Letter Grade</option>
          <option value="NOT_GRADED">Not Graded</option>
        </select>

        <label htmlFor="wd-submission-type" className="wd-form-grid-label wd-form-grid-label-top">Submission Type</label>
        <div className="wd-form-box">
          <select id="wd-submission-type" className="wd-form-field" defaultValue="ONLINE">
            <option value="ONLINE">Online</option>
            <option value="ON_PAPER">On Paper</option>
          </select>
          <fieldset className="wd-form-fieldset">
            <legend className="wd-form-label">Online Entry Options</legend>
            <label htmlFor="wd-text-entry" className="wd-form-check">
              <input type="checkbox" name="online-entry" id="wd-text-entry" /> Text Entry
            </label>
            <label htmlFor="wd-website-url" className="wd-form-check">
              <input type="checkbox" name="online-entry" id="wd-website-url" /> Website URL
            </label>
            <label htmlFor="wd-media-recordings" className="wd-form-check">
              <input type="checkbox" name="online-entry" id="wd-media-recordings" /> Media Recordings
            </label>
            <label htmlFor="wd-student-annotation" className="wd-form-check">
              <input type="checkbox" name="online-entry" id="wd-student-annotation" /> Student Annotation
            </label>
            <label htmlFor="wd-file-upload" className="wd-form-check">
              <input type="checkbox" name="online-entry" id="wd-file-upload" /> File Upload
            </label>
          </fieldset>
        </div>

        <span className="wd-form-grid-label wd-form-grid-label-top">Assign</span>
        <div className="wd-form-box">
          <div>
            <label htmlFor="wd-assign-to" className="wd-form-label">Assign To</label>
            <input id="wd-assign-to" className="wd-form-field" defaultValue="Everyone" />
          </div>
          <div>
            <label htmlFor="wd-due-date" className="wd-form-label">Due</label>
            <input type="date" id="wd-due-date" className="wd-form-field" defaultValue="2024-05-13" />
          </div>
          <div className="wd-form-dates">
            <div>
              <label htmlFor="wd-available-from" className="wd-form-label">Available From</label>
              <input type="date" id="wd-available-from" className="wd-form-field" defaultValue="2024-05-06" />
            </div>
            <div>
              <label htmlFor="wd-available-until" className="wd-form-label">Available Until</label>
              <input type="date" id="wd-available-until" className="wd-form-field" defaultValue="2024-05-20" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="wd-ai-editor-notes" className="wd-form-label">Sample notes</label>
        <textarea
          id="wd-ai-editor-notes"
          rows={4}
          className="wd-form-field"
        />
      </div>

      <div className="wd-form-actions">
        <Link href={listHref} id="wd-cancel" className="wd-btn wd-btn-cancel">
          Cancel
        </Link>
        <Link href={listHref} id="wd-save" className="wd-btn wd-btn-save">
          Save
        </Link>
      </div>
    </div>
  );
}
