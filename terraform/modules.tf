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

#backend config on aws s3
terraform {
  backend "s3" {
    bucket = "rff-wrapper-state"
    key    = "terraformstate"
    region = "us-west-2"
  }
}


################################################################################
############################### S3 DOCS #######################################
################################################################################

module "s3" {
  source         = "./modules/s3"
  bucket         = "rff-wrapper-docs.com"
  acl            = "public-read"
  index_document = "index.html"
  error_document = "index.html"
}


