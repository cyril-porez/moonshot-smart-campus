
auto_auth {

  method {
    type = "token_file"

    config {
      token_file_path = "{{VAULT_TOKEN_PATH}}"
    }
  }
}

template_config {
  static_secret_render_interval = "5m"
  exit_on_retry_failure         = true
}

vault {
  address = "https://vault.atelier.ovh"
}

env_template "ADMIN_JWT_SECRET" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.ADMIN_JWT_SECRET }}{{ end }}"
  error_on_missing_key = true
}
env_template "API_TOKEN_SALT" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.API_TOKEN_SALT }}{{ end }}"
  error_on_missing_key = true
}
env_template "APP_KEYS" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.APP_KEYS }}{{ end }}"
  error_on_missing_key = true
}
env_template "DATABASE_HOST" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.DATABASE_HOST }}{{ end }}"
  error_on_missing_key = true
}
env_template "DATABASE_NAME" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.DATABASE_NAME }}{{ end }}"
  error_on_missing_key = true
}
env_template "DATABASE_PORT" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.DATABASE_PORT }}{{ end }}"
  error_on_missing_key = true
}
env_template "JWT_SECRET" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.JWT_SECRET }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_BUCKET" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.MINIO_BUCKET }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_FOLDER" {
  contents             = "{{ with secret \"dev-env/data/toolbox-gen-project4\" }}{{ .Data.data.MINIO_FOLDER }}{{ end }}"
  error_on_missing_key = true
}
env_template "DATABASE_PASSWORD" {
  contents             = "{{ with secret \"db-develop/creds/db\" }}{{ .Data.password }}{{ end }}"
  error_on_missing_key = true
}
env_template "DATABASE_USERNAME" {
  contents             = "{{ with secret \"db-develop/creds/db\" }}{{ .Data.username }}{{ end }}"
  error_on_missing_key = true
}

env_template "MINIO_ACCESS_KEY" {
  contents             = "{{ with secret \"atelier/data/minio\" }}{{ .Data.data.user }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_SECRET_KEY" {
  contents             = "{{ with secret \"atelier/data/minio\" }}{{ .Data.data.password }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_HOST" {
  contents             = "{{ with secret \"atelier/data/minio\" }}{{ .Data.data.host }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_ENDPOINT" {
  contents             = "{{ with secret \"atelier/data/minio\" }}{{ .Data.data.endpoint }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_PORT" {
  contents             = "{{ with secret \"atelier/data/minio\" }}{{ .Data.data.port }}{{ end }}"
  error_on_missing_key = true
}
env_template "MINIO_USE_SSL" {
  contents             = "{{ with secret \"atelier/data/minio\" }}{{ .Data.data.use_ssl }}{{ end }}"
  error_on_missing_key = true
}
env_template "SMTP_HOST" {
  contents             = "{{ with secret \"atelier/data/ovh-smtp\" }}{{ .Data.data.host }}{{ end }}"
  error_on_missing_key = true
}
env_template "SMTP_PORT" {
  contents             = "{{ with secret \"atelier/data/ovh-smtp\" }}{{ .Data.data.port }}{{ end }}"
  error_on_missing_key = true
}
env_template "SMTP_USERNAME" {
  contents             = "{{ with secret \"atelier/data/ovh-smtp\" }}{{ .Data.data.username }}{{ end }}"
  error_on_missing_key = true
}
env_template "SMTP_PASSWORD" {
  contents             = "{{ with secret \"atelier/data/ovh-smtp\" }}{{ .Data.data.password }}{{ end }}"
  error_on_missing_key = true
}

exec {
  command                   = ["npm", "run", "develop"]
  restart_on_secret_changes = "always"
  restart_stop_signal       = "SIGTERM"
}
