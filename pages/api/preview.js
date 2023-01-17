export default function handler(req, res) {
  res.setPreviewData({
    data: "List of data from Draft Article",
  });
  res.redirect(req.query.redirect);
}
