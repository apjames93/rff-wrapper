################################################################################
############################### SETUP ##########################################
################################################################################

# Specify the provider and access details
provider "aws" {
  version = "~> 2.15.0"

  shared_credentials_file = "$HOME/.aws/credentials"
  profile                 = "default"
  region                  = "us-west-2"
}

################################################################################
############################### S3 DOCS #######################################
################################################################################

module "s3" {
  source         = "./modules/s3"
  bucket         = "rff-wrapper-style-guide.com"
  acl            = "public-read"
  index_document = "index.html"
  error_document = "index.html"
}


