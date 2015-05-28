The post body must include the _URL_ of the video to process. It may also include output settings for the job, including an output destination, notification settings, and transcoding settings.

We currently support downloading files using HTTP/HTTPS, S3, Cloud Files, FTP/FTPS, SFTP, and Aspera. When you create a new encoding job through the API, our server will immediately respond with details about the job and output files being created. You should store the job and outputs IDs to track them through the encoding process.
