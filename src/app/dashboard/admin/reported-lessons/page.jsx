"use client";

import { useEffect, useState } from "react";

export default function ReportedLessons() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    const res = await fetch("/api/reports");
    const data = await res.json();
    setReports(data);
  };

  const approveReport = async (id) => {
    await fetch(`/api/reports/${id}`, {
      method: "PATCH",
    });

    loadReports();
  };

  const ignoreReport = async (id) => {
    await fetch(`/api/reports/${id}`, {
      method: "DELETE",
    });

    loadReports();
  };

  const deleteReportedLesson = async (lessonId) => {
    if (!confirm("Delete this lesson?")) return;

    await fetch(`/api/lessons/${lessonId}`, {
      method: "DELETE",
    });

    loadReports();
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Reported Lessons</h1>

      <table className="table w-full">
        <thead>
          <tr>
            <th>Lesson</th>

            <th>Reason</th>

            <th>Reported By</th>

            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report.lessonTitle}</td>

              <td>{report.reason}</td>

              <td>{report.userEmail}</td>

              <td className="space-x-2">
                <button
                  onClick={() => approveReport(report._id)}
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  ✔ Approve
                </button>

                <button
                  onClick={() => deleteReportedLesson(report.lessonId)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  🗑 Delete Lesson
                </button>

                <button
                  onClick={() => ignoreReport(report._id)}
                  className="bg-gray-500 text-white px-3 py-1 rounded"
                >
                  🚫 Ignore
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
