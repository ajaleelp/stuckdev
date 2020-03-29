require 'test_helper'

class HelpGroupsControllerTest < ActionDispatch::IntegrationTest
  test "should get add" do
    get help_groups_add_url
    assert_response :success
  end

  test "should get remove" do
    get help_groups_remove_url
    assert_response :success
  end

  test "should get new" do
    get help_groups_new_url
    assert_response :success
  end

end
