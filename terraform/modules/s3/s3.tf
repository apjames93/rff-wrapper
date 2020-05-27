resource "aws_s3_bucket" "bucket" {
  bucket = "${var.bucket}"
  acl    = "${var.acl}"
policy = <<POLICY
{
  "Version":"2012-10-17",
  "Statement":[{
	"Sid":"PublicReadGetObject",
        "Effect":"Allow",
	  "Principal": "*",
      "Action":["s3:GetObject"],
      "Resource":["arn:aws:s3:::${var.bucket}/*"
      ]
    }
  ]
}
POLICY
  versioning {
    enabled = true
  }

  website {
    index_document = "${var.index_document}"
    error_document = "${var.error_document}"
  }
}
