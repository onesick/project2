class AddTechnicianIdToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :technician_id, :integer
  end
end
