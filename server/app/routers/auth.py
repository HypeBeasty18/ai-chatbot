from flask.blueprints import Blueprint

auth = Blueprint('name', __name__)


@auth.route('/signup', methods=['POST'])
def signup():
    pass


@auth.route('/signin', methods=['POST'])
def signin():
    pass


@auth.route('/confirm_emai', methods=['POST'])
def confirm_email():
    pass
